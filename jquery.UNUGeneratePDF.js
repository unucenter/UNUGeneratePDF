(function($){


	var opts;

	$.fn.UNUGeneratePDF = function(options){

		// generate the pdf
		if( options == 'generatePDF'){
			generatePDF(this);
		}

		// initialization
		else{
			opts = $.extend( true, $.fn.UNUGeneratePDF.defaults, options );
      initialize( this );
		}
		return this;
	};


  function initialize(e){

    // bind event handler
    $(".unuelement-question input[type=radio]").change( function(event){
      var show =  ( $(this).val() == 'yes' ) ? true : false  ;
      $(this).closest(".unuelement-question").find("> div").toggle(show);

      // focus on the first input
      if( show ) $(this).closest(".unuelement-question").find("> div").find('input, textarea').first().focus();
      event.preventDefault();
    });

    // bind event handler
    $(e).find(".unuTableButton").each( function(){
      var table = $(this).siblings("table");
      var add = $(this).find("button.unuAddTableEntry"), remove = $(this).find("button.unuRemoveTableEntry");
        $( add ).on('click', function(event){
          addTableEntry( table );
          event.preventDefault();
        });
      $( remove ).on('click', function(event){
          removeTableEntry( table );
          event.preventDefault();
        });
    });

    // bind event handler
    $(e).find(".unuSectionButton").each( function(){
      var section = $(this).siblings(".panel-group");
      var add = $(this).find("button.unuAddSectionEntry"), remove = $(this).find("button.unuRemoveSectionEntry"); 
        $( add ).on('click', function(event){
          addSectionEntry( section );
          event.preventDefault();
        });
      $( remove ).on('click', function(event){
          removeSectionEntry( section );
          event.preventDefault();
        });
    });
  }


	function generatePDF(e){
		jspdf = new jsPDF();
		jspdf.setProperties(opts.metadata);
		if( opts.image64 ){
			jspdf.addImage( opts.image64, 'PNG', 80, 15, 60, 18);
			opts.layout.initY = 50;
		}
		var doc = new Document("", $.extend( {}, opts.layout, {jspdf:jspdf } ) );
   	var allPanels = $(e).find( "> .panel-group > .panel-default");
   	parse(doc, $(allPanels) );

    if(opts.statement){
      var statemt = new Section(" ");
      var content = opts.statement.content;
      statemt.add( new Input( content, "" ) );

      var fields = new Section("");
      $.each( opts.statement.fields, function(){
        fields.add( new Input( this, " ") );
      });
      statemt.add(fields);
      doc.add(statemt);
    }

    doc.render( 0 );
   	jspdf.save( opts.outputFileName + ".pdf");
	}

	function parse( doc, panels ){
		var parseTable = function( element ){
			var header = [], body = [];
			$(element).find("thead tr").children().each( function(){
				header.push( $( this ).text() );
			});
			$(element).find("tbody tr").each( function(){
				var row = [], counter=0;
				$.each( $(this).children(), function(){
					row.push( {title:header[counter], data: $(this).find('input').val()});
					counter++;
				});
				counter = 0;
				body.push( row );
			});
			return body;
		}

		$(panels).each(function(){
			var sectionName = $.trim( $(this).find("> div.panel-heading .panel-title a").text() );
			var section = new Section( sectionName );

			$(this).find("[class*='unuelement-']").each(function(){

				var elementSemantic = $(this).attr('class').match(/unuelement-(\w+)/)[1];

				if( elementSemantic == "input"){
					var label = $(this).find("label").text(), value = $.trim($(this).find(".form-control").val());
					var leafElement = new Input( label, value ) ;
					section.add( leafElement );
				}
				else if( elementSemantic == "radio"){
					var checkedOne = $(this).find("input:checked");
					var label = $(this).find(">label").text(), value;

					value = (checkedOne.length > 0) ? $(checkedOne).val() : "";
					var leafElement = new Input( label, value ) ;
					section.add( leafElement );
				}
				else if( elementSemantic == "question"){

					var question = new Section("");
					var content = $(this).find("> p").text();
					var response = $(this).find("input[type=radio]:checked").val();
					question.add( new Input( content, response ) );

					var table = $(this).find("> div table"); 

					// there is a table
					if( response!='no' && table.length > 0 ){
						question.add( new Table( "", parseTable( table )  ) ); 
					}
					else{
						var complement = new Section(" ");
						var input = $(this).find("> div .form-control");
						var complementLabel = $(input).siblings("p").text(), complementValue = $(input).val();
						if( complementValue ){
							complement.add( new Input( complementLabel, complementValue ) );
							question.add(complement);
						}
					}
					section.add(question);
				}
				else if( elementSemantic == "table"){

					var label = $(this).find("label").text(), value = $.trim($(this).find(".form-control").val());
					var table = new Table( label, parseTable ( this ) );
					section.add(table);
				}
				else if( elementSemantic == "section"){
					var no = $(this).find(".panel-title a").text() ;
					var job = new Section(no);
					$(this).find( ".form-control" ).each( function(){
						var label = $(this).parent().siblings("label").text(), value = $(this).val();
						var input = new Input( label, value ) ;
						job.add( input );
					});
					section.add( job );
				}
			});

			doc.add( section );
		});
	}


  $.fn.UNUGeneratePDF.defaults = {
              layout:{
								initY:15,
								top:15,
								marginRight:190,
								bottom:285,
								marginLeft:15, 
								offsetXNextLevel:5,
								jumpSection:10, 
								jumpTitle:6,
								jumpParagraph:5
              },
							outputFileName: "applicationHistory",
							metadata:{},
              statement:null
	};



  function addTableEntry( table ){
    var tbody       = $(table).find( '> tbody' );
    var all_lines   = $(tbody).find('> tr');
    var nb_records  = all_lines.length;
    var first_tr    = all_lines[0];
    var cloned      = $(first_tr).clone();

    // empty the inputs
    $(cloned).find('input, textarea').each( function(){
          $(this).attr( 'id',  $(this).attr('id') + nb_records).val('');
        });
    $(cloned).hide().appendTo( tbody ).fadeIn("slow");
    // focus on the first element of the new row
    $(tbody).find('tr:last-child').find("td:first-child").find("input, textarea").focus();

    }

  function removeTableEntry( table ){
    var tbody = $(table).find( 'tbody' );
    var children = $( tbody ).children();
    var tbody_nb_children = children.length;
    if( tbody_nb_children > 1 ){
      $(children[tbody_nb_children-1]).fadeOut("slow", function(){$(this).remove();});         
    }
  }


  function addSectionEntry( section ){
    var all_records   = $(section).children();
    var nb_records    = all_records.length; 
    var first_record  = all_records[0], cloned = $(first_record).clone();

    // change the id
    $(cloned).find('div.panel-collapse').attr('id',
            function(i, att){ return att.split("_")[0] + "_" + (nb_records +1);});

    // change the href and title
    (function(e){
      var currentRec = nb_records +1;
      $(e).attr('href', $(e).attr('href').split("_")[0] + "_" + currentRec);
      $(e).text( $(e).text().split(" ")[0] + " " + currentRec );
    })( $(cloned).find('.panel-title a') );

    // change the input's id and empty each input value
    $(cloned).find('input, textarea').each(function(){
              $(this).attr( 'id',  $(this).attr('id') + nb_records).val('');
    });

    // change all label's for
    $(cloned).find('label').each(function(){
      $(this).attr( 'for',  $(this).attr('for') + nb_records);
    });

    // collapse hide all other
    $(section).find('div.panel-collapse').each(function(){
      if( $(this).hasClass( 'in') ){
        $(this).collapse('hide');
      }
    }); 

    // attach to the parent
    $(cloned).hide().appendTo( section ).fadeIn("slow");

    (function(e){
      // collapse show the new one
      if( ! e.hasClass('in') ){
        $(e).collapse( 'show'); 
      }
      // focus on the first element of the new entry
      $(e).find('input, textarea').first().focus();
    })( $(cloned).find('div.panel-collapse') );
  }


  function removeSectionEntry( section ){ 
        var nb_records = $( section ).children().length;
        if( nb_records > 1 ){
          $(section).find('div.panel-default:last-child').fadeOut("slow", function(){$(this).remove();})          
        }
  }


// Generated by CoffeeScript 1.7.1
  var Document, Input, Section, SplitContent, Table,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Document = (function() {
    Document.CURRENTY = null;

    Document.SETTINGS = null;

    function Document(name, settings) {
      if (name == null) {
        name = "";
      }
      if (settings == null) {
        settings = null;
      }
      this.name = name;
      this.children = [];
      if (settings != null) {
        Document.CURRENTY = settings.initY;
        Document.SETTINGS = settings;
      }
    }

    Document.is_enough_space = function() {
      return !(Document.CURRENTY + Document.SETTINGS.jumpTitle > Document.SETTINGS.bottom);
    };

    Document.check_space = function() {
      if (!Document.is_enough_space()) {
        Document.SETTINGS.jspdf.addPage();
        return Document.CURRENTY = Document.SETTINGS.top;
      }
    };

    Document.prototype.add = function(child) {
      return this.children.push(child);
    };

    Document.prototype.render = function(currentLevel) {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.render(currentLevel));
      }
      return _results;
    };

    return Document;

  })();

  Section = (function(_super) {
    __extends(Section, _super);

    function Section(name) {
      Section.__super__.constructor.call(this, name);
    }

    Section.prototype.render = function(currentLevel) {
      if (this.name) {
        Document.CURRENTY += Document.SETTINGS.jumpSection - currentLevel * Document.SETTINGS.jumpSection / 1.8;
      }
      Document.SETTINGS.jspdf.setFontSize(12 - currentLevel * 0.4);
      Document.SETTINGS.jspdf.setFontStyle('bold');
      if (this.name) {
        Document.check_space();
        Document.SETTINGS.jspdf.text(Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, this.name);
        Document.CURRENTY += Document.SETTINGS.jumpTitle - currentLevel;
        return Section.__super__.render.call(this, currentLevel + 1);
      } else {
        return Section.__super__.render.call(this, currentLevel);
      }
    };

    return Section;

  })(Document);

  Input = (function(_super) {
    __extends(Input, _super);

    function Input(label, value) {
      this.label = label;
      this.value = value;
    }

    Input.prototype.render = function(currentLevel) {
      var contentWidth, line, nbChar, splittedValue, xOffsetStart, _i, _j, _len, _len1, _results;
      Document.SETTINGS.jspdf.setFontStyle('bold');
      Document.SETTINGS.jspdf.setFontSize(9);
      xOffsetStart = Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel;
      contentWidth = Document.SETTINGS.marginRight - xOffsetStart;
      nbChar = SplitContent.nbCharFromOffset(contentWidth);
      splittedValue = SplitContent.split(this.label, nbChar);
      for (_i = 0, _len = splittedValue.length; _i < _len; _i++) {
        line = splittedValue[_i];
        Document.check_space();
        Document.SETTINGS.jspdf.text(Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, line);
        Document.CURRENTY += Document.SETTINGS.jumpParagraph;
      }
      Document.CURRENTY -= Document.SETTINGS.jumpParagraph;
      Document.CURRENTY += Document.SETTINGS.jumpParagraph;
      Document.SETTINGS.jspdf.setFontStyle('normal');
      xOffsetStart = Document.SETTINGS.marginLeft + (currentLevel + 1) * Document.SETTINGS.offsetXNextLevel;
      contentWidth = Document.SETTINGS.marginRight - xOffsetStart;
      nbChar = SplitContent.nbCharFromOffset(contentWidth);
      splittedValue = SplitContent.split(this.value.replace(/\n/g, " "), nbChar);
      _results = [];
      for (_j = 0, _len1 = splittedValue.length; _j < _len1; _j++) {
        line = splittedValue[_j];
        Document.check_space();
        Document.SETTINGS.jspdf.text(xOffsetStart, Document.CURRENTY, line);
        _results.push(Document.CURRENTY += Document.SETTINGS.jumpParagraph);
      }
      return _results;
    };

    return Input;

  })(Document);

  Table = (function(_super) {
    __extends(Table, _super);

    function Table(label, values) {
      this.label = label;
      this.values = values;
    }

    Table.prototype.render = function(currentLevel) {
      var contentWidth, input, line, nbChar, rows, splittedValue, xOffsetStart, xOffsetStartData, xOffsetStartTitle, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref;
      Document.SETTINGS.jspdf.setFontStyle('bold');
      Document.SETTINGS.jspdf.setFontSize(9);
      xOffsetStart = Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel;
      contentWidth = Document.SETTINGS.marginRight - xOffsetStart;
      nbChar = SplitContent.nbCharFromOffset(contentWidth);
      splittedValue = SplitContent.split(this.label, nbChar);
      for (_i = 0, _len = splittedValue.length; _i < _len; _i++) {
        line = splittedValue[_i];
        Document.check_space();
        Document.SETTINGS.jspdf.text(Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, line);
        Document.CURRENTY += Document.SETTINGS.jumpParagraph;
      }
      Document.CURRENTY -= Document.SETTINGS.jumpParagraph;
      Document.CURRENTY += Document.SETTINGS.jumpParagraph;
      if (this.label) {
        xOffsetStartTitle = Document.SETTINGS.marginLeft + currentLevel * Document.SETTINGS.offsetXNextLevel;
        xOffsetStartData = Document.SETTINGS.marginLeft + (currentLevel + 1) * Document.SETTINGS.offsetXNextLevel;
      } else {
        xOffsetStartTitle = Document.SETTINGS.marginLeft + (currentLevel + 1) * Document.SETTINGS.offsetXNextLevel;
        xOffsetStartData = Document.SETTINGS.marginLeft + (currentLevel + 2) * Document.SETTINGS.offsetXNextLevel;
      }
      _ref = this.values;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        rows = _ref[_j];
        for (_k = 0, _len2 = rows.length; _k < _len2; _k++) {
          input = rows[_k];
          Document.check_space();
          Document.SETTINGS.jspdf.setFontStyle('bold');
          Document.SETTINGS.jspdf.text(xOffsetStartTitle, Document.CURRENTY, input.title);
          Document.CURRENTY += Document.SETTINGS.jumpParagraph;
          Document.SETTINGS.jspdf.setFontStyle('normal');
          nbChar = SplitContent.nbCharFromOffset(Document.SETTINGS.marginRight - xOffsetStartTitle);
          splittedValue = SplitContent.split(input.data.replace(/\n/g, " "), nbChar);
          for (_l = 0, _len3 = splittedValue.length; _l < _len3; _l++) {
            line = splittedValue[_l];
            Document.check_space();
            Document.SETTINGS.jspdf.text(xOffsetStartData, Document.CURRENTY, line);
            Document.CURRENTY += Document.SETTINGS.jumpParagraph;
          }
        }
        Document.CURRENTY += Document.SETTINGS.jumpParagraph;
      }
      return Document.CURRENTY -= Document.SETTINGS.jumpParagraph;
    };

    return Table;

  })(Document);

  SplitContent = (function() {
    function SplitContent() {}

    SplitContent.nbCharFromOffset = function(offset) {
      return parseInt(offset * (84 / 165));
    };

    SplitContent.split = function(content, line_length) {
      var currentLine, lines, newLine, total, word, words, _i, _len;
      if (content) {
        words = content.split(" ");
        lines = [];
        currentLine = [];
        total = 0;
        for (_i = 0, _len = words.length; _i < _len; _i++) {
          word = words[_i];
          if (total + word.length <= line_length) {
            currentLine.push(word);
            total += word.length;
          } else {
            lines.push(currentLine.join(" "));
            newLine = [];
            newLine.push(word);
            currentLine = newLine;
            total = word.length;
          }
        }
        lines.push(currentLine.join(" "));
        return lines;
      } else {
        return [];
      }
    };

    return SplitContent;

  })();


	
})(jQuery);




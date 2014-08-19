	(function($){

		$(".form-group").css({'margin-bottom': '5px' });
		$(".form-group input[type!=radio]").css({'height': '30px', 'padding' : '5px 10px', 'line-height' : '1.5', 'border-radius':'3px' });
		$(".control-label").css({'padding-top': '0px', 'text-align': 'right' });

		$(".radioToggle").change( function(event){
			var show =  ( $(this).val() == 'yes' ) ? true : false  ;
			$(this).closest(".question").find(".toggleQuestion").toggle(show);

			// focus on the first input
			if( show )  $(this).closest("div.question").find("div.toggleQuestion .form-control").first().focus();
			event.preventDefault();
		});


		function addTableEntry( table ){
			var tbody 			= $(table).find( 'tbody' );
			var all_lines		= $(tbody).children();
			var nb_records 		= all_lines.length;
			var first_tr 		= all_lines[0];
			var cloned   		= $(first_tr).clone();
			
			
			// empty the inputs
			$(cloned).find('input').each( function(){
					$(this).attr( 'id',  $(this).attr('id') + nb_records);
					$(this).val('');
			});
			$(cloned).hide().appendTo( tbody ).fadeIn("slow");
			// focus on the first element of the new row
			$(tbody).find('tr:last-child').find("td:first-child input").focus();
	   }

		function removeTableEntry( table ){
			var tbody = $(table).find( 'tbody' );
			var tbody_nb_children = $( tbody ).children().length;
			if( tbody_nb_children > 1 ){
				$(tbody).find('tr:last-child').fadeOut("slow", function(){$(this).remove();})					
			}
	   }

	   	$(".tableButton").each( function(){
				var table = $(this).closest( ".table-responsive" ).find("table");
				var add = $(this).find("button.addTableEntry"), remove = $(this).find("button.removeTableEntry"); 
	   			$( add ).on('click', function(event){
	   				addTableEntry( table );
	   				event.preventDefault();
	   			});
				$( remove ).on('click', function(event){
	   				removeTableEntry( table );
	   				event.preventDefault();
	   			});
	   	});


	   	$(".tableButton").each( function(){
				var table = $(this).closest( ".table-responsive" );

				var add = $(this).find("button.addTableEntry"), remove = $(this).find("button.removeTableEntry"); 
	   			$( add ).on('click', function(event){
	   				showTableEntry( table );
	   				event.preventDefault();
	   			});
				$( remove ).on('click', function(event){
	   				hideTableEntry( table );
	   				event.preventDefault();
	   			});
	   	});

		$("#addJobEntry").on('click', function(event){ 
				var jobContainer 	= $("#accordionJobs");
				var all_jobs		= jobContainer.children();
				var nb_records 		= all_jobs.length;
				var first_record 	= all_jobs[0];
				var cloned   		= $(first_record).clone();

				// change the href
				$(cloned).find('div[id^=job_]').addClass("in").attr(  'id', 
															function(index, attr){
																return attr.split("_")[0] + "_" + (nb_records +1);
														}
													);


				// change the href and the title
				$(cloned).find('h4.panel-title a').attr('href', 
															function(index, attr){
																return attr.split("_")[0] + "_" + (nb_records +1);
														});
				$(cloned).find('h4.panel-title a').text( 
														$(cloned).find('h4.panel-title a').text().split(" ")[0] + " " + (nb_records +1)
													);

				// change the input's id and empty the value
				$(cloned).find('.form-control').each(function(){
					$(this).attr( 'id',  $(this).attr('id') + nb_records);
					$(this).val('');
				});
				// change all label's for
				$(cloned).find('label').each(function(){
					$(this).attr( 'for',  $(this).attr('for') + nb_records);
				});
				$(cloned).hide().appendTo( jobContainer ).fadeIn("slow");

				event.preventDefault();
   				});

		$("#removeJobEntry").on('click', function(event){ 
				var all_jobs = $("#accordionJobs");
				var nb_records = $( all_jobs ).children().length;
				if( nb_records > 1 ){
					$(all_jobs).find('div.unuelement-job:last-child').fadeOut("slow", function(){$(this).remove();})					
				}
				event.preventDefault();
   		});



		// global settings for the PDF rendering
		var jspdf, doc=null, settings;

		function initJspdf(){
			jspdf = new jsPDF();
			settings = {
						jspdf:jspdf,
						initY:50,
						top:15,
						marginRight:190,
						bottom:285,
						marginLeft:15, 
						offsetXNextLevel:5,
						jumpSection:10, 
						jumpTitle:6,
						jumpParagraph:4
						}

			var image64Base = "data:image/png;base64,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";
   			
			jspdf.setProperties({
			        title: 'Personal history form',
			        subject: 'This is the subject',
			        author: 'C3 UNU, Tokyo',
			        keywords: 'Personal history form for applicant',
			        creator: 'C3 UNU'
			      });
			jspdf.setFontSize(10);
			jspdf.setFontStyle('bold');
			jspdf.text(23, 15, "Instructions" );
			jspdf.setFontStyle('normal');
			jspdf.text(12, 19, "Please answer each question" );
			jspdf.text(12, 23, "clearly and completely. Type" );
			jspdf.text(12, 27, "or print in ink. Read carefully" );
			jspdf.text(12, 31, "and follow all directions." );
			jspdf.text(12, 35, "Please tick appropriate boxes." );
			jspdf.addImage( image64Base, 'PNG', 80, 15, 60, 18);
		}


		function str_split(string, split_length) {

		  if (split_length === null) {
		    split_length = 1;
		  }
		  if (string === null || split_length < 1) {
		    return false;
		  }
		  string += '';
		  var chunks = [],
		    pos = 0,
		    len = string.length;
		  while (pos < len) {
		    chunks.push(string.slice(pos, pos += split_length));
		  }

		  return chunks;
		}


		function parse( doc, panels, startLevel ){

			function parseTable( element ){
				var label = $(element).find("label").text();
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


			var currentLevel = startLevel;
			$(panels).each(function(){
				var sectionName = $.trim( $(this).find("> div.panel-heading h4.panel-title a").text() );
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

						if( checkedOne.length > 0 ){
							value = $(checkedOne).val();
						}
						// no one is checked
						else{
							value = $(this).find("input").first().val();
						}
						var leafElement = new Input( label, value ) ;
						section.add( leafElement );
					}
					else if( elementSemantic == "question"){
						// var question = new Section("");

						var content = $(this).find("> p").text();
						var response = $(this).find("input.radioToggle:checked").val();
						section.add( new Input( content, response ) );
/*
						var table = $(this).find(".toggleQuestion table"); 

						if( table.length > 0 ){
							var labelHeaderBody = parseTable( table );
							//complement = new Table( labelHeaderBody[0], labelHeaderBody[1], labelHeaderBody[2] );
						}
						else{
							var input = $(this).find(".toggleQuestion .form-control")
							var complementLabel = $(input).siblings("p").text();
							var complementValue  = $(input).val();
							if( complementValue )
								question.add( new Input( complementLabel, complementValue ) );
						}
*/
						//section.add( question  );
					}
					else if( elementSemantic == "table"){

						var label = $(this).find("label").text(), value = $.trim($(this).find(".form-control").val());
						//var table = new Input( label, "" );
						var rowObjects = parseTable ( this ) ;
						var recname = "Record", counter = 1;

						$(rowObjects).each( function(){
							var rec = new Section(recname + " " + counter ); 
							$(this).each( function(i,el){
								rec.add( new Input( el.title, el.data) ); 
							});
							counter++;
							section.add( rec );
						});

					}
					else if( elementSemantic == "job"){
						var no = $(this).find("h4.panel-title a").text() ;
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



   		function pdfGeneration2(){

   			doc = new Document("", settings);
   			var allPanels = $("#accordion > .panel-default");

   			parse(doc, $(allPanels) );
   			doc.render( 0 );

   			jspdf.save("testForm.pdf");
   		}


		$("#pdfGenerate").on('click', function(event){ 
				doc =null;
				initJspdf();
				pdfGeneration2();
				event.preventDefault();
   		});


   	})(jQuery);

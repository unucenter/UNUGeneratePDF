class Document
  # static variable
  @CURRENTY:null
  @SETTINGS:null
  constructor: (name="", settings=null ) ->
    @name = name
    @children = []
    if settings?
      Document.CURRENTY = settings.initY 
      Document.SETTINGS = settings

  # class methods
  @is_enough_space: () ->
    ! (Document.CURRENTY + Document.SETTINGS.jumpTitle > Document.SETTINGS.bottom)

  @check_space:() ->
    if ! Document.is_enough_space()
      Document.SETTINGS.jspdf.addPage()
      Document.CURRENTY = Document.SETTINGS.top


  add: (child) ->
    @children.push( child )

  render: ( currentLevel ) ->
    for child in @children
      child.render( currentLevel )


class Section extends Document

  constructor:(name ) ->
    super( name )
  
  render: ( currentLevel ) ->
    if @name
      Document.CURRENTY += Document.SETTINGS.jumpSection-currentLevel*Document.SETTINGS.jumpSection/1.8

    Document.SETTINGS.jspdf.setFontSize(12-currentLevel*0.4)
    Document.SETTINGS.jspdf.setFontStyle('bold')

    if @name
      Document.check_space()
      Document.SETTINGS.jspdf.text( Document.SETTINGS.marginLeft + currentLevel*Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, @name )
      Document.CURRENTY += Document.SETTINGS.jumpTitle-currentLevel
      super( currentLevel+1 )
    else
      super( currentLevel )

class Input extends Document

  constructor: ( @label, @value ) ->

  render: ( currentLevel ) ->
    Document.SETTINGS.jspdf.setFontStyle('bold')
    Document.SETTINGS.jspdf.setFontSize(9)
    
    # label
    xOffsetStart = Document.SETTINGS.marginLeft + currentLevel*Document.SETTINGS.offsetXNextLevel
    contentWidth = Document.SETTINGS.marginRight - xOffsetStart
    nbChar = SplitContent.nbCharFromOffset( contentWidth )
    splittedValue = SplitContent.split( @label, nbChar )
    for line in splittedValue
      Document.check_space()
      Document.SETTINGS.jspdf.text( Document.SETTINGS.marginLeft + currentLevel*Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, line )
      Document.CURRENTY += Document.SETTINGS.jumpParagraph
    # correct the last loop jump
    Document.CURRENTY -= Document.SETTINGS.jumpParagraph

    # value
    Document.CURRENTY += Document.SETTINGS.jumpParagraph
    Document.SETTINGS.jspdf.setFontStyle('normal')
    xOffsetStart = Document.SETTINGS.marginLeft + (currentLevel+1)*Document.SETTINGS.offsetXNextLevel
    contentWidth = Document.SETTINGS.marginRight - xOffsetStart
    nbChar = SplitContent.nbCharFromOffset( contentWidth )
    splittedValue = SplitContent.split( @value.replace(/\n/g," "), nbChar )

    for line in splittedValue
      Document.check_space()
      Document.SETTINGS.jspdf.text( xOffsetStart, Document.CURRENTY, line )
      Document.CURRENTY += Document.SETTINGS.jumpParagraph
    # do not correct the last loop jump because of the next paragraph



class Table extends Document

  constructor: ( @label, @values ) ->

  render: ( currentLevel ) ->
    Document.SETTINGS.jspdf.setFontStyle('bold')
    Document.SETTINGS.jspdf.setFontSize(9)
    
    # label
    xOffsetStart = Document.SETTINGS.marginLeft + currentLevel*Document.SETTINGS.offsetXNextLevel
    contentWidth = Document.SETTINGS.marginRight - xOffsetStart
    nbChar = SplitContent.nbCharFromOffset( contentWidth )
    splittedValue = SplitContent.split( @label, nbChar )
    for line in splittedValue
      Document.check_space()
      Document.SETTINGS.jspdf.text( Document.SETTINGS.marginLeft + currentLevel*Document.SETTINGS.offsetXNextLevel, Document.CURRENTY, line )
      Document.CURRENTY += Document.SETTINGS.jumpParagraph
    # correct the last loop jump
    Document.CURRENTY -= Document.SETTINGS.jumpParagraph

    # values
    Document.CURRENTY += Document.SETTINGS.jumpParagraph
    if @label
      xOffsetStartTitle = Document.SETTINGS.marginLeft + (currentLevel)*Document.SETTINGS.offsetXNextLevel
      xOffsetStartData  = Document.SETTINGS.marginLeft + (currentLevel+1)*Document.SETTINGS.offsetXNextLevel
    else
      xOffsetStartTitle = Document.SETTINGS.marginLeft + (currentLevel+1)*Document.SETTINGS.offsetXNextLevel
      xOffsetStartData  = Document.SETTINGS.marginLeft + (currentLevel+2)*Document.SETTINGS.offsetXNextLevel

    for rows in @values
      for input in rows
        # title
        Document.check_space()
        Document.SETTINGS.jspdf.setFontStyle('bold')
        Document.SETTINGS.jspdf.text( xOffsetStartTitle, Document.CURRENTY, input.title )

        # data
        Document.CURRENTY += Document.SETTINGS.jumpParagraph
        Document.SETTINGS.jspdf.setFontStyle('normal')
        # if the data is multilines
        nbChar = SplitContent.nbCharFromOffset(  Document.SETTINGS.marginRight - xOffsetStartTitle )
        splittedValue = SplitContent.split( input.data.replace(/\n/g," "), nbChar )
        for line in splittedValue
          Document.check_space()
          Document.SETTINGS.jspdf.text( xOffsetStartData, Document.CURRENTY, line )
          Document.CURRENTY += Document.SETTINGS.jumpParagraph

      Document.CURRENTY += Document.SETTINGS.jumpParagraph

    # correct the last loop jump
    Document.CURRENTY -= Document.SETTINGS.jumpParagraph


class SplitContent

  constructor: () ->  

  # Class method, compute the correspondant nb of char
  @nbCharFromOffset: ( offset ) ->
    parseInt( offset *( 84/165 ) )

  # Class method, split the content into several lines
  @split:(content, line_length) ->
    if content
      words = content.split(" ")
      lines = []
      currentLine = []
      total = 0
      for word in words
        if total + word.length <= line_length
          currentLine.push( word )
          total += word.length
        else
            lines.push( currentLine.join( " ") )
            newLine = []
            newLine.push( word )
            currentLine = newLine
            total = word.length

      lines.push( currentLine.join( " ") )
      lines
    else
      []

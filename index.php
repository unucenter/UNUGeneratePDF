<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="en"> <![endif]-->
<!--[if (gte IE 10)|!(IE)]><!-->
<html lang="en-US"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<title>UNU PDF Generation</title>
		<meta name="description" content="">
	    <meta name="keywords" content="">
		<meta name="author" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel='stylesheet' id='bootstrap-style-css'  href='css/bootstrap.css' type='text/css' media='all' />

    	<style type="text/css">
    		@import url(http://fonts.googleapis.com/css?family=Lato:300);
    		body{
				font-family: 'Lato', 'Helvetica', sans-serif;
				color:#5f6f81;
    		}
    		h4.panel-title{
    			font-weight:bold;
    		}
   			label{
   				color:#5f6f81;
   			}
   			.question{
   				margin-top:15px;
   				padding-bottom: 20px;
   				border-bottom: 1.2px solid #ddd;
   			}
    	</style>

	</head>
	<body>
		<div class="container">
        	<div class="row">
            	<div class="col-md-12">
            		<h1>Application form</h1>
					<form id="applicationForm" class="form-horizontal">
						<span class="glyphicon glyphicon-comment" data-toggle="tooltip" data-placement="left" title="Please answer each question clearly and completely. Read carefully and follow all directions. Please tick appropriate boxes."></span>

						<div id="accordion" class="panel-group">

								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_1">
												Position you are applying for
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_1" class="panel-collapse collapse in">
						      			<div class="panel-body">
											<div class="form-group unuelement-input">
												<label for="positionRef" class="col-sm-2 control-label">Vacancy number</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="positionRef">
												</div>
											</div>
											<div class="form-group unuelement-input">
												<label for="positionTitle" class="col-sm-2 control-label">Position title</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="positionTitle">
												</div>
											</div>
										</div> <!-- .panel-body -->
									</div> <!-- panel-collapse collapse -->

								</div><!-- .panel .panel-default -->


								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_2">
												Personal data
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_2" class="panel-collapse collapse">
						      			<div class="panel-body">

											<div class="form-group unuelement-input">
												<label for="familyName" class="col-sm-2 control-label">Family name</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="familyName">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="firstName" class="col-sm-2 control-label">First name</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="firstName">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="maidenName" class="col-sm-2 control-label">Maiden name</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="maidenName">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-radio">
												<label for="sexMale" class="col-sm-2 control-label">Sex</label>
												<div class="col-sm-10">
													<label class="radio-inline">
														<input type="radio" name="sex" id="sexMale" value="male"> Male
													</label>
													<label class="radio-inline">
								  						<input type="radio" name="sex" id="sexFemale" value="female"> Female
													</label>
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="birthDate" class="col-sm-2 control-label">Date of birth</label>
												<div class="col-sm-10">
													<input type="text" placeholder="dd/mm/yyyy" class="form-control" id="birthDate">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="birthPlace" class="col-sm-2 control-label">Place of birth</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="birthPlace">
												</div>
											</div><!-- .form-group -->			
											<div class="form-group unuelement-input">
												<label for="nationalityBirth" class="col-sm-2 control-label">Nationality at birth</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="nationalityBirth">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="nationalityPresent" class="col-sm-2 control-label">Present nationality (ies) if differs</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="nationalityPresent">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="permanentAddress" class="col-sm-2 control-label">Permanent address</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="permanentAddress">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input" >
												<label for="telPermanentAddress" class="col-sm-2 control-label">Tel. no. (permanent address)</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="telPermanentAddress">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="presentAddress" class="col-sm-2 control-label">Present address (if differs)</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="presentAddress">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="telPresentAddress" class="col-sm-2 control-label">Tel. no. (present address)</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="telPresentAddress">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="officeTel" class="col-sm-2 control-label">Office tel. no.</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="officeTel">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="officeFax" class="col-sm-2 control-label">Office fax no.</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="officeFax">
												</div>
											</div><!-- .form-group -->					
											<div class="form-group unuelement-input">
												<label for="contactEmail" class="col-sm-2 control-label">Contact e-mail address</label>
												<div class="col-sm-10">
													<input type="email" class="form-control" id="contactEmail">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-input">
												<label for="maritalStatus" class="col-sm-2 control-label">Marital status</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="maritalStatus">
												</div>
											</div><!-- .form-group -->
											<div class="form-group unuelement-table">
												<label for="dependentFirstName" class="col-sm-2 control-label">Person financially fully dependent on you</label>
												<div class="col-sm-10 table-responsive">
												  <table class="table">
												    <thead>
											          <tr>
											            <th>First name</th>
											            <th>Last name</th>
														<th>Date of birth</th>
											            <th>Relationship</th>
											          </tr>
											        </thead>
											        <tbody>
														<tr>
															<td><input id="dependentFirstName" type="text" class="form-control"></td>
															<td><input id="dependentLastName" type="text" class="form-control"></td>
															<td><input id="dependentBirthDate" type="text" placeholder="dd/mm/yyyy" class="form-control"></td>
															<td><input id="dependentRelationship" type="text" class="form-control"></td>
														</tr>
													</tbody>
												  </table>
												  <div class="tableButton" style="margin-top:-20px;margin-left:8px;position:relative;">
													<button class="addTableEntry">
														<span class="glyphicon glyphicon-plus"></span>
													</button>
													<button id="salutToma" class="removeTableEntry">
														<span class="glyphicon glyphicon-minus"></span>
													</button>
												  </div>
												</div><!-- table-responsive -->
											</div><!-- .form-group -->
										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->
								</div><!-- .panel .panel-default -->




								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_3">
												Questions
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_3" class="panel-collapse collapse">
						      			<div class="panel-body">
												<div class="unuelement-question question col-sm-11">
													<p>Entry into United Nations University (UNU) service might entail assignment and travel to any area of the world in which United Nations University might have responsibilities. Have you any disabilities or other restrictions which might limit your prospective field of work or your ability to engage in travel?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="travelRestriction" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="travelRestriction" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;" >
														<p>Please describe:</p>
														<textarea class="form-control"></textarea>
													</div>
												</div><!-- .question -->

												<div class="unuelement-question question col-sm-11">
													<p>Are you currently, or have you previously been, employed by the United Nations or a Common System agency?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="unEmployed" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="unEmployed" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;">
														<p>Please state name of agency and your Index Number (Staff Identity No.):</p>
														<input type="text" class="form-control"/>	
													</div>
												</div><!-- .question -->

												<div class="unuelement-question question col-sm-11">
													<p>Have you taken up legal permanent residence status in any country other than that of your nationality?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="residence" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="residence" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;">
														<p>Which country (ies):</p>
														<input type="text" class="form-control"/>	
													</div>
												</div><!-- .question -->


												<div class="unuelement-question question col-sm-11">
													<p>Have you taken any steps towards changing your present nationality?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="changeNationality" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="changeNationality" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;">
														<p>Explain fully:</p>
														<textarea class="form-control"></textarea>
													</div>
												</div><!-- .question -->


												<div class="unuelement-question question col-sm-11">
													<p>Do you have a dependent spouse and/or relatives currently employed by the United Nations or a Common System agency?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="relativeEmployed" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="relativeEmployed" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;">
														<div class="table-responsive">
														  <table class="table">
														    <thead>
													          <tr>
													            <th>Name</th>
													            <th>Relationship</th>
																<th>Name of International Organization</th>
													          </tr>
													        </thead>
													        <tbody>
																<tr>
																	<td><input id="UNEmployedName" type="text" class="form-control"></td>
																	<td><input id="UNEmployedRelationship" type="text" class="form-control"></td>
																	<td><input id="UNEmployedOrganization" type="text" class="form-control"></td>
																</tr>
															</tbody>
														  </table>
														  <div class="tableButton" style="margin-top:-20px;margin-left:8px;position:relative;">
															<button class="addTableEntry">
																<span class="glyphicon glyphicon-plus"></span>
															</button>
															<button class="removeTableEntry">
																<span class="glyphicon glyphicon-minus"></span>
															</button>
														  </div>
														</div><!-- table-responsive -->
													</div><!-- toggleQuestion -->
												</div><!-- .question -->


												<div class="unuelement-question question col-sm-11">
													<p>Have you previously submitted an application for employment and/or undergone any tests with UNU?</p>
													<label class="radio-inline">
														<input class="radioToggle" type="radio" name="previousApplication" value="yes"> Yes
													</label>
													<label class="radio-inline">
								  						<input class="radioToggle" type="radio" name="previousApplication" value="no" checked> No
													</label>
													<div class="toggleQuestion" style="display:none;">
														<p>When:</p>
														<textarea class="form-control"></textarea>
													</div>
												</div><!-- .question -->

										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->					
								</div><!-- .panel .panel-default -->


								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_4">
												Languages
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_4" class="panel-collapse collapse">
						      			<div class="panel-body">

											<div class="form-group unuelement-table">
												<div class="col-sm-10 table-responsive">
													<table class="table">
													    <thead>
												          <tr>
												            <th>Language</th>
												            <th>Read</th>
															<th>Write</th>
												            <th>Speak</th>
															<th>Understand</th>
												          </tr>
												        </thead>
												        <tbody>
															<tr>
																<td><input id="languageName" type="text" class="form-control"></td>
																<td><input id="languageRead" type="text" class="form-control"></td>
																<td><input id="languageWrite" type="text" class="form-control"></td>
																<td><input id="languageSpeak" type="text" class="form-control"></td>
																<td><input id="languageUnderstand" type="text" class="form-control"></td>
															</tr>
														</tbody>
													  </table>
											  		<div class="tableButton" style="margin-top:-20px;margin-left:8px;position:relative;">
														<button class="addTableEntry">
															<span class="glyphicon glyphicon-plus"></span>
														</button>
														<button class="removeTableEntry">
															<span class="glyphicon glyphicon-minus"></span>
														</button>
													</div>														
												</div><!-- .table-responsive -->
											</div><!-- .form-group -->
										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->					
								</div><!-- .panel .panel-default -->



								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_5">
												Education
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_5" class="panel-collapse collapse">
						      			<div class="panel-body">
											<div class="form-group unuelement-table">
												<div class="table-responsive">
												  <table class="table">
												    <thead>
											          <tr>
											            <th>University (name, place and country)</th>
											            <th>From</th>
														<th>To</th>
											            <th>Degrees and distinctions</th>
											            <th>Main course of study</th>
											          </tr>
											        </thead>
											        <tbody>
														<tr>
															<td><input type="text" class="form-control"></td>
															<td><input type="text" placeholder="yyyy" size="2" maxlength="4" class="form-control"></td>
															<td><input type="text" placeholder="yyyy" size="2" maxlength="4" class="form-control"></td>
															<td><input type="text" class="form-control"></td>
															<td><input type="text" class="form-control"></td>
														</tr>
													</tbody>
												  </table>
												  <div class="tableButton" style="margin-top:-20px;margin-left:8px;position:relative;">
													<button class="addTableEntry">
														<span class="glyphicon glyphicon-plus"></span>
													</button>
													<button class="removeTableEntry">
														<span class="glyphicon glyphicon-minus"></span>
													</button>
												  </div>
												</div><!-- table-responsive -->
											</div><!-- .form-group -->

										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->					
								</div><!-- .panel .panel-default -->



								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_6">
												Employment record
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_6" class="panel-collapse collapse">
										<div class="panel-body">
											<span class="glyphicon glyphicon-comment" data-toggle="tooltip" data-placement="left" title="Starting with your present employment, list in reverse order every position you have held. Include service in the armed forces."></span>


											<div id="accordionJobs" class="panel-group"> <!-- all records -->
												<div class="panel panel-default unuelement-job">
													<div class="panel-heading">
														<h4 class="panel-title">
																<a data-toggle="collapse" data-parent="#accordionJobs" href="#job_1">Record 1</a>
														</h4>
													</div><!-- .panel-heading -->

													<div id="job_1" class="panel-collapse collapse in">
											      		<div class="panel-body">
															<div class="form-group">
																<label for="jobFrom" class="col-sm-2 control-label">From</label>
																<div class="col-sm-10">
																	<input type="text" placeholder="mm/yyyy" class="form-control" id="jobFrom">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobTo" class="col-sm-2 control-label">To</label>
																<div class="col-sm-10">
																	<input type="text" placeholder="mm/yyyy" class="form-control" id="jobTo">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="salaryStart" class="col-sm-2 control-label">Starting salary (year)</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="salaryStart">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="salaryFinal" class="col-sm-2 control-label">Final salary (year)</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="salaryFinal">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobTitle" class="col-sm-2 control-label">Exact title of your post</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobTitle">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobEmployer" class="col-sm-2 control-label">Employer name and address</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobEmployer">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobEmployerBusiness" class="col-sm-2 control-label">Type of business</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobEmployerBusiness">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobSupervisor" class="col-sm-2 control-label">Name of supervisor</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobSupervisor">
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobSupervised" class="col-sm-2 control-label">No. and type of employees supervised</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobSupervised">
																</div>
															</div><!-- .form-group -->							
															<div class="form-group">
																<label for="jobDuties" class="col-sm-2 control-label">Duties and achievements</label>
																<div class="col-sm-10">
																	<textarea rows="4" class="form-control" id="jobDuties"></textarea>
																</div>
															</div><!-- .form-group -->
															<div class="form-group">
																<label for="jobDeparture" class="col-sm-2 control-label">Reason for leaving</label>
																<div class="col-sm-10">
																	<input type="text" class="form-control" id="jobDeparture">
																</div>
															</div><!-- .form-group -->
														</div> <!-- .panel-body-->
													</div> <!-- .panel-collapse -->								
												</div><!-- .panel-default -->
											</div> <!-- panel-group -->
											<div>
												<button id="addJobEntry">
													<span class="glyphicon glyphicon-plus"></span>
												</button>
												<button id="removeJobEntry">
													<span class="glyphicon glyphicon-minus"></span>
												</button>
											</div>
										</div> <!-- panel-body -->
									</div><!-- .panel-collapse -->
								</div><!-- .panel-default -->




								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_7">
												References
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_7" class="panel-collapse collapse">
										<div class="panel-body">
										<span class="glyphicon glyphicon-comment" data-toggle="tooltip" data-placement="left" title="List three persons, not related to you, who are familiar with your character and qualifications. Do not repeat the names of supervisors already listed under the EMPLOYMENT section, above."></span>


											<div class="form-group unuelement-table">
												<div class="table-responsive">
												  <table class="table">
												    <thead>
											          <tr>
											            <th>Title and full name</th>
											            <th>Postal address and contact email</th>
											            <th>Profession</th>
											          </tr>
											        </thead>
											        <tbody>
														<tr>
															<td><input id="referenceName" type="text" class="form-control"></td>
															<td><input id="referenceAddress" type="text" class="form-control"></td>
															<td><input id="referenceProfession" type="text" class="form-control"></td>
														</tr>
													</tbody>
												  </table>
												  <div class="tableButton" style="margin-top:-20px;margin-left:8px;position:relative;">
													<button class="addTableEntry" >
														<span class="glyphicon glyphicon-plus"></span>
													</button>
													<button class="removeTableEntry" >
														<span class="glyphicon glyphicon-minus"></span>
													</button>
												  </div>
												</div><!-- table-responsive-->
											</div><!-- .form-group -->

										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->

								</div><!-- .panel .panel-default -->




								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a data-toggle="collapse" data-parent="#accordion" href="#collapse_8">
												Skills
											</a>
										</h4>
									</div><!-- .panel-heading -->

									<div id="collapse_8" class="panel-collapse collapse">
										<div class="panel-body">

											<div class="form-group unuelement-input col-sm-11" style="margin-left:3px;">
												<label for="softwareProficient" style="font-weight:normal;font-style:normal;color:#5f6f81;font-size:14px;">List any software applications in which you are proficient</label>
												<div>
													<textarea id="softwareProficient" rows="2" class="form-control"></textarea>
												</div>
											</div><!-- .form-group -->

											<div class="form-group unuelement-input col-sm-11" style="margin-left:3px;">
												<label for="applicationCriteria" style="font-weight:normal;font-style:normal;color:#5f6f81;font-size:14px;">Please provide any other relevant details in support of your application – especially as to how you meet the selection criteria for this particular position.</label>
												<div>
													<textarea id="applicationCriteria" rows="5" class="form-control"></textarea>
												</div>
											</div>

										</div> <!-- panel-body -->
									</div> <!-- panel-collapse collapse -->

								</div><!-- .panel .panel-default -->

							<button id="pdfGenerate" style="margin-top: 10px;" class="button btn btn-primary">Generate pdf</button>
						</div>
					</form>
				</div>
        	</div>
        </div>
		<script src='js/jquery-min.js'></script>
		<script src='js/bootstrap.min.js'></script>
		<script src="js/jspdf.debug.js"></script>
		<script src="js/personalHistoryForm.js"></script>
		<script src="js/document.js"></script>
	</body>
</html>
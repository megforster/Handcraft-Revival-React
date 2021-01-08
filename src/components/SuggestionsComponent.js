import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

class SuggestionsPage extends Component{

    constructor(props){
        super(props);

        this.state ={
            craft_category: '',
            craft_topic: '',
            resource_topic: '',
            resource_link: '',

            craft_name: '',
            similiar: false,
            overview: '',
            example_resource_one: '',
            example_resource_two: '',
            example_resource_three: '',

            idea: '',
            justification: '',

            touched:{
                craft_category: false,
                craft_topic: false,
                resource_topic: false,
                resource_link: false,

                craft_name: false,
                similiar: false,
                overview: false,
                example_resource_one: false,
                example_resource_two: false,
                example_resource_three: false,

                idea: false,
                justification: false,

            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        });

        //alert("hi"+target.value)
    }

    handleSubmit(event){
        console.log("Current state is: "+JSON.stringify(this.state));
        alert("Current state is: "+JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(craft_category, craft_topic, resource_topic, resource_link, craft_name, similiar, overview, example_resource_one, example_resource_two, example_resource_three, idea, justification){
        const errors = {
            craftCateogry: '', 
            craftTopic: '', 
            resourceTopic: '',
            resourceLink: '',
            craftName: '', 
            similiar: '', 
            overview: '',
            exampleResourceOne: '',
            exampleResourceTwo: '', 
            exampleResourceThree: '',
            idea: '',
            justification: ''
        };

        if(this.state.touched.craft_category){
            if(craft_category.length < 0){
                errors.craftCateogry = 'Please select a craft category.'
            }
        }

        if(this.state.touched.craft_topic){
            if(craft_topic.length < 0){
                errors.craftTopic = 'Please select a craft topic.'
            }
        }

        if(this.state.touched.resource_topic){
            //alert("validaite value: "+resource_topic)
            if(resource_topic.length < 3){
                errors.resourceTopic = 'Please enter a comprehensive resource topic description.'
            }
        }

        if(this.state.touched.resource_link && !resource_link.includes('http://')){
            errors.resourceLink = 'Please enter a valid http web address.'
        }

        if(this.state.touched.craft_name){
            if(craft_name.length < 3){
                errors.craftName = 'Please enter a comprehensive craft name.'
            }
        }

        if(!this.state.touched.similiar){
            errors.similiar = 'Please choose one of the options.'
        }

        if(this.state.touched.overview){
            if(overview.length < 3){
                errors.overview = 'Please enter a comprehensive craft overview'
            }
        }

        if(this.state.touched.example_resource_one && !example_resource_one.includes('http://')){
            errors.exampleResourceOne = 'Please enter a valid http web address.'
        }

        if(this.state.touched.example_resource_two && !example_resource_two.includes('http://')){
            errors.exampleResourceTwo = 'Please enter a valid http web address.'
        }

        if(this.state.touched.example_resource_three && !example_resource_three.includes('http://')){
            errors.exampleResourceThree = 'Please enter a valid http web address.'
        }

        if(this.state.touched.idea){
            if(idea.length < 3){
                errors.idea = 'Please describe your idea in its entirety.'
            }
        }

        if(this.state.touched.justification){
            if(justification.length < 3){
                errors.justification = 'Please justify your idea comprehensively.'
            }
        }

        return errors
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render(){
        const errors = this.validate(this.state.craft_category, this.state.craft_topic, this.state.resource_topic, this.state.resource_link, this.state.craft_name, this.state.similiar, this.state.overview, this.state.example_resource_one, this.state.example_resource_two, this.state.example_resource_three, this.state.idea, this.state.justification)

        return(
            <div className="container" id="formContainer">
                <div className="row">
                    <div className="col-lg">
                        <Form onSubmit={this.handleSubmit}>
                            <h4>Suggest A New Tutorial/Resource</h4>
                            <FormGroup row>
                                <Label htmlFor="craftCategory" className="col-sm-4">Craft Category</Label>
                                <Input type="select" name="craft_category" id="craftCategory" className="col-sm-7" invalid={errors.craftCateogry} onBlur = {this.handleBlur("craft_category")} onChange = {this.handleInputChange}>
                                    <option selected disabled value="">Choose...</option> 
                                    <option>Crochet</option>
                                    <option>Knitting</option>
                                    <option>Embroidery</option>
                                </Input>
                                <FormFeedback>{errors.craftCateogry}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="craftTopic" className="col-sm-4">Craft Topic</Label>
                                <Input type="select" name="craft_topic" id="craftTopic" className="col-sm-7" invalid={errors.craftTopic} onBlur={this.handleBlur("craft_topic")} onChange={this.handleInputChange}>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Supplies</option>
                                    <option>The Basics</option>
                                    <option>Beginner Projects</option>
                                    <option>History of the Craft</option>
                                    <option>Popular Crafters</option>
                                    <option>Advanced Resources</option>
                                </Input>
                                <FormFeedback>{errors.craftTopic}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="resourceTopic" className="col-sm-4">Resource Type</Label>
                                <Input type="text" name="resource_topic" id="resourceTopic" className="col-sm-7" value = {this.state.resource_topic} invalid={errors.resourceTopic} onBlur={this.handleBlur("resource_topic")} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.resourceTopic}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="resourceURL" className="col-sm-4">Resource Link</Label>
                                <Input type="url" name="resource_link" id="resourceURL" className="col-sm-7" value = {this.state.resource_link} invalid={errors.resourceLink} onBlur={this.handleBlur("resource_link")} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.resourceLink}</FormFeedback>
                            </FormGroup>
                            <Button className="submit">Submit</Button>
                        </Form>
                    </div>
                    <div className="col-lg">
                        <Form>
                            <h4>Suggest A New Craft Category</h4>
                            <FormGroup row>
                                <Label htmlFor="craftName" className="col-sm-4">Craft Name</Label>
                                <Input type="text" name="craft_name" id="craftname" className="col-sm-7" value = {this.state.craft_name} invalid = {errors.craftName} onBlur={this.handleBlur("craft_name")} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.craftName}</FormFeedback>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Similar To A Craft Currently Offered?</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="similiar" />{' '}
                                    Yes
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="similiar" />{' '}
                                    No
                                </Label>
                                </FormGroup>
                                <FormFeedback>{errors.similiar}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="craftOverview" className="col-sm-4">Overview Of Craft</Label>
                                <Input type="text" name="overview" id="craftOverview" className="col-sm-7" value = {this.state.overview} invalid = {errors.overview} onBlur = {this.handleBlur("overview")} onChange = {this.handleInputChange}/>
                                <FormFeedback>{errors.overview}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="resource1" className="col-sm-4">Example Resource #1</Label>
                                <Input type="url" name="example_resource_one" id="resource1" className="col-sm-7" value = {this.state.example_resource_one} invalid = {errors.exampleResourceOne} onBlur = {this.handleBlur("example_resource_one")} onChange = {this.handleInputChange}/>
                                <FormFeedback>{errors.exampleResourceOne}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="resource2" className="col-sm-4">Example Resource #2</Label>
                                <Input type="text" name="example_resource_two" id="resource2" className="col-sm-7" value={this.state.example_resource_two} invalid = {errors.exampleResourceTwo} onBlur = {this.handleBlur("example_resource_two")} onChange = {this.handleInputChange}/>
                                <FormFeedback>{errors.exampleResourceTwo}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="resource3" className="col-sm-4">Example Resource #3</Label>
                                <Input type="text" name="example_resource_three" id="resource3" className="col-sm-7" value = {this.state.example_resource_three} invalid = {errors.exampleResourceThree} onBlur = {this.handleBlur("example_resource_three")} onChange = {this.handleInputChange}/>
                                <FormFeedback>{errors.exampleResourceThree}</FormFeedback>
                            </FormGroup>
                            <Button className="submit">Submit</Button>
                        </Form>
                    </div>
                    <div className="col-lg">
                        <Form>
                        <h4>Suggest An Improvement To The Site</h4>
                        <FormGroup row>
                            <Label htmlFor="idea" className="col-sm-4">Idea</Label>
                            <Input type="textarea" name="idea" id="idea" className="col-sm-7" value = {this.state.idea} invalid = {errors.idea} onBlur = {this.handleBlur("idea")} onChange = {this.handleInputChange}/>
                            <FormFeedback>{errors.idea}</FormFeedback>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="reason" className="col-sm-4">Justification</Label>
                            <Input type="textarea" name="justification" id="reason" className="col-sm-7" value = {this.state.justification} invalid = {errors.justification} onBlur = {this.handleBlur("justification")} onChange = {this.handleInputChange}/>
                            <FormFeedback>{errors.justification}</FormFeedback>
                        </FormGroup>
                            <Button className="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>   
        );
    } 
}

export default SuggestionsPage;
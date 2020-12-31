import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function SuggestionsPage(props){
    return(
        <div className="container" id="formContainer">
            <div className="row">
                <div className="col-lg">
                    <Form>
                        <h4>Suggest A New Tutorial/Resource</h4>
                        <FormGroup className="row">
                            <Label for="craftCategory" className="col-sm-4">Craft Category</Label>
                            <Input type="select" name="select" id="craftCategory" className="col-sm-7">
                                <option selected disabled value="">Choose...</option>
                                <option>Crochet</option>
                                <option>Knitting</option>
                                <option>Embroidery</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="craftTopic" className="col-sm-4">Craft Topic</Label>
                            <Input type="select" name="select" id="craftTopic" className="col-sm-7">
                                <option selected disabled value="">Choose...</option>
                                <option>Supplies</option>
                                <option>The Basics</option>
                                <option>Beginner Projects</option>
                                <option>History of the Craft</option>
                                <option>Popular Crafters</option>
                                <option>Advanced Resources</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="resourceTopic" className="col-sm-4">Resource Type</Label>
                            <Input type="text" name="textInput" id="resourceTopic" className="col-sm-7" />
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="resourceURL" className="col-sm-4">Resource Link</Label>
                            <Input type="url" name="email" id="resourceURL" className="col-sm-7"/>
                        </FormGroup>
                        <Button className="submit">Submit</Button>
                    </Form>
                </div>
                <div className="col-lg">
                    <Form>
                        <h4>Suggest A New Craft Category</h4>
                        <FormGroup className="row">
                            <Label for="craftName" className="col-sm-4">Craft Name</Label>
                            <Input type="text" name="textInput" id="craftname" className="col-sm-7"/>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Similar To A Craft Currently Offered?</Label>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Yes
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                No
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="craftOverview" className="col-sm-4">Overview Of Craft</Label>
                            <Input type="text" name="textInput" id="craftOverview" className="col-sm-7"/>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="resource1" className="col-sm-4">Example Resource #1</Label>
                            <Input type="url" name="email" id="resource1" className="col-sm-7"/>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="resource2" className="col-sm-4">Example Resource #2</Label>
                            <Input type="text" name="textInput" id="resource2" className="col-sm-7"/>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="resource3" className="col-sm-4">Example Resource #3</Label>
                            <Input type="text" name="textInput" id="resource3" className="col-sm-7"/>
                        </FormGroup>
                        <Button className="submit">Submit</Button>
                    </Form>
                </div>
                <div className="col-lg">
                    <Form>
                    <h4>Suggest An Improvement To The Site</h4>
                    <FormGroup className="row">
                        <Label for="idea" className="col-sm-4">Idea</Label>
                        <Input type="textarea" name="text" id="idea" className="col-sm-7"/>
                    </FormGroup>
                    <FormGroup className="row">
                        <Label for="reason" className="col-sm-4">Justification</Label>
                        <Input type="textarea" name="text" id="reason" className="col-sm-7"/>
                    </FormGroup>
                        <Button className="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>   
    );
}

export default SuggestionsPage;
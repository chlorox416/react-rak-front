import React from "react";
import { Button, Card, Icon, Modal, Header } from "semantic-ui-react";
import "../Styles/CategoryCard.css";
import dayjs from "dayjs";
const today = dayjs().format("YYYY-MM-DD");

class CategoryCard extends React.Component {
  state = {
    clicked: false,
    open: false,
    date: "",
  };

  toggleHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  toggleModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  thisWeek = () => {
    let rand = Math.random() * (7 - 1) + 1;
    let date = dayjs().add(rand, "day").format("YYYY-MM-DD");
    this.setState({ date: date });
  };

  nextWeek = () => {
    let rand = Math.random() * (14 - 7) + 7;
    let date = dayjs().add(rand, "day").format("YYYY-MM-DD");
    this.setState({ date: date });
  };

  thisMonth = () => {
    let rand = Math.random() * (31 - 1) + 1;
    let date = dayjs().add(rand, "day").format("YYYY-MM-DD");
    this.setState({ date: date });
  };

  render() {
    return (
      <Card className="card">
        <Card.Content>
          <Card.Header>{this.props.kindnessObj.act}</Card.Header>
          <Card.Description>
            Category: {this.props.kindnessObj.category}
          </Card.Description>
          <Icon
            className="close"
            name="close"
            color="red"
            onClick={() => this.props.removeHandler(this.props.kindnessObj.id)}
          />
          {this.state.clicked ? (
            <Button
              floated="right"
              positive
              disabled
              size="tiny"
              onClick={this.toggleHandler}
            >
              Scheduled!
            </Button>
          ) : (
            <Modal
              onClose={() => this.toggleModal()}
              onOpen={() => this.toggleModal()}
              open={this.state.open}
              trigger={
                <Button
                  floated="right"
                  positive
                  size="tiny"
                  onClick={() => {
                    this.toggleModal();
                  }}
                >
                  Remind me!
                </Button>
              }
            >
              <Modal.Header>YUH! Let's do this!</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Pick a time block</Header>
                  <Button.Group>
                    <Button onClick={() => this.thisWeek()}>this week?</Button>
                    <Button.Or />
                    <Button onClick={() => this.nextWeek()}>next week?</Button>
                    <Button.Or />
                    <Button onClick={() => this.thisMonth()}>
                      this month?
                    </Button>
                  </Button.Group>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => this.toggleModal()}>
                  NVM
                </Button>
                <Button
                  content="Y33T"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    this.toggleModal();
                    this.toggleHandler();
                    this.props.createUserKindness(this.props.kindnessObj, this.state.date);
                  }}
                  positive
                />
              </Modal.Actions>
            </Modal>
          )}
        </Card.Content>
      </Card>
    );
  }
}

export default CategoryCard;

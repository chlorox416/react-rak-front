import React from "react";
import { Button, Card, Icon, Modal, Header, Grid } from "semantic-ui-react";
import "../Styles/CategoryCard.css";
import dayjs from "dayjs";
import toast, {Toaster} from "react-hot-toast";
const today = dayjs().format("YYYY-MM-DD");
const confirmNotify = () => toast("All Set! ")

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
      <>
      <Card className="card">
        <Card.Content>
          <Card.Header>{this.props.kindnessObj.act}</Card.Header>
          <Card.Description>
            Category: {this.props.kindnessObj.category}
          </Card.Description>
          <Icon
            className="close"
            name="close"
            color="black"
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
                  <Grid centered columns={3}>
                    <Grid.Column>
                    <Button grey onClick={() => this.thisWeek()}>This Week?</Button>
                    </Grid.Column>
                    <Grid.Column>
                    <Button grey onClick={() => this.nextWeek()}>Next Week?</Button>
                    </Grid.Column>
                    <Grid.Column>
                    <Button grey onClick={() => this.thisMonth()}>This Month?</Button>
                    </Grid.Column>
                  </Grid>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button basic grey onClick={() => this.toggleModal()}>Cancel</Button>
                <Button
                  content="Confirm"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    this.toggleModal();
                    confirmNotify();
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
      <Toaster/>
      </>
    );
    
  }
}

export default CategoryCard;

import { PureComponent, Component } from "react";
import { IProps } from "./interface";
import {memo} from 'react';

export const FirstComponent = memo(({ name, age }: IProps) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

export class SecondComponent extends PureComponent<IProps> {
  render() {
    console.log("SecondComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class ThirdComponent extends Component<{ user: IProps }, {user: IProps}> {
  constructor(props) {
    super(props);
    this.state = {user: props.user};
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.user.name !== this.state.user.name ||
    nextProps.user.age !== this.state.user.age
  }

  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.state.user.name}, my age is {this.state.user.age}
      </div>
    );
  }
}

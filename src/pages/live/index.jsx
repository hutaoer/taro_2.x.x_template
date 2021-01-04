import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Text } from "@tarojs/components";

class Live extends Component {
  // constructor(props) {
  //   super()
  //   // console.log(props)
  // }
  componentWillMount() {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "live/fetchData",
      payload: {},
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "直播列表",
  };

  render() {
    console.log(this.props)
    return (
      <View className="index">
        {this.props.list.map((item) => (
          <Text>{item.name}</Text>
        ))}
      </View>
    );
  }
}

export default connect(({ live }) => ({
  ...live,
}))(Live);

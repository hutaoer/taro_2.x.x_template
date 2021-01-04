import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Text } from "@tarojs/components";
import "./index.scss";

class LiveList extends Component {
  // constructor(props) {
  //   super()
  //   // console.log(props)
  // }
  componentWillMount() {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "liveList/fetchData",
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
    return (
      <View className="index">
        {this.props.list.map((item) => (
          <Text>{item.name}</Text>
        ))}
      </View>
    );
  }
}

export default connect(({ liveList }) => ({
  ...liveList,
}))(LiveList);

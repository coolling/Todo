import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import './content.less'


class Content extends Component {
  config = {
    navigationBarTitleText: "添加"
  };
  
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log(this.$router.params)
    return (
      <View className="index" style={{backgroundColor:this.$router.params.color}}>
        <View className='importance'>重要性:{this.$router.params.importance==='true'?'Very important':'normal'}</View>
        <View className='content'>
            {this.$router.params.content}
        </View>
      </View>
    );
  }
}
Page({});
export default Content;

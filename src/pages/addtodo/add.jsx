import Taro, { Component } from "@tarojs/taro";
import { View, Text, Textarea, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { add } from "../../actions";
import "./add.css";
@connect(
  state => ({
    todos: state.todos
  }),
  { add }
)
class Add extends Component {
  config = {
    navigationBarTitleText: "添加"
  };
  state = {
    newtodo: "",
    
    color: "white",
   
    colors: [["pink",0], ["yellow",1],[ "orange",2],["white",3]],
   
    importance:false
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  writetodo = e => {
    this.setState({
      newtodo: e.target.value
    });
  };
  savetodo = () => {
    let { add,todos } = this.props;
    add(this.state.newtodo,this.state.color,this.state.importance);
    
    Taro.navigateTo({
      url: "/pages/index/index"
    });
  };
  setColor = acolor => {
    console.log(1);
    this.setState(
      {
        color: acolor
      },
      () => console.log(this.state.color)
    );
  };
  setImportance = () => {
    this.setState({
      importance: !this.state.importance
    });
    
   
  };
  
  render() {
    return (
      <View className="index">
        <View className="style">
          <View className="colors">
            {this.state.colors.map((value) => {
              return (
                <View
                  className="color"
                  key={value[1]}
                  style={{ backgroundColor: value[0] }}
                  onClick={this.setColor.bind(this, value[0])}
                ></View>
              );
            })}
          </View>
          <View onClick={this.setImportance.bind(this)} className="importance" style={this.state.importance===true?{color:'red'}:null}>
              !
          </View>
          <View className="a_style">
            <Text className="save" onClick={this.savetodo}>
              保存
            </Text>
          </View>
        </View>

        <Textarea
          className="write"
          placeholder="写些什么吧..."
          onInput={this.writetodo}
          style={{
            backgroundColor: this.state.color,
            fontFamily: this.state.font
          }}
        ></Textarea>
      </View>
    );
  }
}
Page({});
export default Add;

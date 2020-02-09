import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import addimg from "../../Img/addimg.png";
import { del } from "../../actions";

import "./index.less";
import { from } from "rxjs";
import deleteimg from "../../Img/delete.png";
@connect(
  state => ({
    todos: state.todos
  }),
  { del }
)
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  delTodo(id) {
    let { del } = this.props;
    del(id);
  }
  addtodo = () => {
    Taro.navigateTo({
      url: "/pages/addtodo/add"
    });
  };
  seeContent = todo => {
    Taro.navigateTo({
      url: "/pages/content/content?content=" + todo.text+'&importance='+todo.importance+'&color='+todo.color
    });
  };
  
  render() {
    const todosJsx = this.props.todos.todos.map(todo => {
      return (
        <View
          className="todos_item"
          key={todo.id}
          style={{ backgroundColor: todo.color }}
        >
          <Text
            className="item"
            onClick={this.seeContent.bind(this, todo)}
          >
            <Text style={{ color: "red" ,fontSize:'30PX'}} className="todotext" >{todo.importance ? "  !  " : null}</Text>
            {todo.text.length >= 12
              ? todo.text.substring(0, 12) + "..."
              : todo.text}
          </Text>
          <Image
            src={deleteimg}
            className="del"
            onClick={this.delTodo.bind(this, todo.id)}
          ></Image>
        </View>
      );
    });
    return (
      <View className="indextodos">
        <View className="somewords">Do You Should Do</View>
        <View>{todosJsx}</View>
        <Image src={addimg} className="add" onClick={this.addtodo}></Image>
      </View>
    );
  }
}
Page({});
export default Index;

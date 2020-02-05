import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import {add,del} from '../../actions'

import './index.less'


@connect((state) => ({
  
  todos:state.todos
}), { add,del})
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  delTodo (id) {
    let { del } = this.props
    del(id)
  }
  render () {
    
     

    const todosJsx = this.props.todos.todos.map(todo => {
      return (
        <View className='todos_item' key={todo.id}><Text>{todo.text}</Text><View className='del' onClick={this.delTodo.bind(this, todo.id)}>-</View></View>
      )
    })
    return (
    
        
        <View className='indextodos'>
       
        <View>{ todosJsx }</View>  

      </View>
    )
  }
}

export default Index

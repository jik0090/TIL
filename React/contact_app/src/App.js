import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {

  id = 3;

  state = {
    infomation: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '이안',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '이어안',
        phone: '010-0000-0003'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    const { infomation } = this.state
    this.setState({
      infomation: infomation.concat({
        ...data,
        id: this.id++
      })
    })
  }

  handleRemove = (id) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data
            }
          };
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input 
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder='검색...'
        />
        <PhoneInfoList 
          data={this.state.infomation.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;

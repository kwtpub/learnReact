import React from 'react'
import Input from './UI/input/Input'
import Select from './UI/select/Select'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
    <Input 
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      placeholder='Поиск'
    />

    <Select 
      options={[
        {value: 'name', name: 'По названию'},
        {value: 'price', name: 'По цене'},
      ]}
      defaultValue={'Сортировка'}
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
    />
  </div>
  )
}

export default PostFilter
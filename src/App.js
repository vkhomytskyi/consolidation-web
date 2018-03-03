import React, {Component} from 'react'
import {Client, Endpoint, middleware} from 'react-rest-client'

export const onEnter = fn => event => {
    if (event.key === 'Enter') fn(event)
}

class App extends Component {
    render = () => {
        return (
            <Client base='http://example.com'>
                <Endpoint
                    path='todos'
                    middleware={[middleware.handleJson()]}
                    render={({response, handlers}) => response ? (
                        <div>
                            <input type='text' onKeyPress={onEnter(event => {
                                handlers.add({text: event.target.value})
                            })}/>
                            <ul>
                                {response.data.map((todo, i) => (
                                    <li key={i}>
                                        <input type='text' placeholder={todo.text} onKeyPress={onEnter(event => {
                                            const handler = handlers.bind(todo.uuid)
                                            handler.edit({text: event.target.value})
                                            event.target.value = ''
                                        })}/>
                                        <input type='button' onClick={event => handlers.destroy(todo.uuid)}
                                               value='Delete'/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}/>
            </Client>
        )
    }
}

export default App

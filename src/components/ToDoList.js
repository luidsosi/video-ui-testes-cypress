import React, { Component, Fragment } from 'react'

import { 
    Button, 
    Container, 
    Input,
    InputGroup, 
    InputGroupAddon,
    Jumbotron 
} from 'reactstrap'

import Menu from './Menu'
import { Table as BootstrapTable } from 'reactstrap'

import EmptyTable from './EmptyTable'
import If from './If'

class TodoList extends Component {

    state = {
        task: '',
        tasks: [
            "teste 1",
            "teste 2"
        ]
    }

    render() {
        const { task, tasks } = this.state
        return (
            <Fragment>
                <Menu/>
                <Jumbotron>
                    <h1 className="display-4" data-cy="title-component">To-Do List Component!</h1>
                </Jumbotron>
                <Container>
                    <InputGroup>
                        <Input 
                            data-cy="input-task" 
                            onChange={ this.handleChange } 
                            placeholder="O que você precisa fazer?" 
                            value={ task }
                        />
                        <InputGroupAddon addonType="prepend">
                            <Button color="success" data-cy="btn-add" onClick={ this.add }>Adicionar</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <BootstrapTable className="mt-5" data-ty="table-tasks">
                        <thead data-cy="table-tasks-header">
                            <tr>
                                <th data-cy="tasks-tasks-column-tarefa">Tarefa</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody data-cy="table-tasks-body">
                            <If condition={ this.state.tasks.length } el={ <EmptyTable/> }>
                                { tasks.map((task, index) => 
                                    <tr data-cy="table-tasks-row" key={ index }>
                                        <td data-cy={`table-tasks-${task}`}>{ task }</td>
                                        <td><button data-cy={`btn-remove-${index}`} onClick={() => {
                                            this.setState({
                                                tasks: this.state.tasks.filter((_, indexItem)=>{
                                                    return index != indexItem;
                                                })
                                            })  
                                        }}>Excluir</button></td>
                                    </tr>
                                ) }
                            </If>
                        </tbody>
                    </BootstrapTable>

                </Container>
            </Fragment>
        )
    }

    add = () => {
        const { task } = this.state
        this.setState(({ tasks }) => ({ task: '', tasks: [].concat(tasks, task.trim())}))
    }

    handleChange = ({ target: { value } }) => this.setState({ task: value })

}

export default TodoList
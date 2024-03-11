import { Button, Card, CardBody } from '@nextui-org/react'
import { Task } from '@renderer/Task'
import { ReactElement } from 'react'

type ListProps = {
  tarefas: Task[]
}

function List({ tarefas }: ListProps): ReactElement {
  return (
    <>
      <h3>Lista de tarefas</h3>

      <ul>
        {tarefas.length > 0 &&
          tarefas.map((tarefa) => (
            <Card>
            <CardBody key={tarefa.title}>
              <strong>{tarefa.title}</strong>
              <Button>excluir</Button>
              <Button>editar</Button>
              <Button>completar</Button>
            </CardBody>
            </Card>

          ))}
      </ul>
    </>
  )
}

export default List

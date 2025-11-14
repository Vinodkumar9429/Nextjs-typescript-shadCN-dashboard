import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"

const todos:string[] = [
    "Create a full screen navigation menu animation using GSAP",
    "Add Todo list functionality in the the dashboard",
    "Optimize ads for youtube users",
    "Post about this project on linkedin",
    "Note whatever you've learnt from this project somewhere",
    "Re-implement this sidebar somewhere in the future projects",
    "Checkout all the components of the ShadCN",
    "Finish mongodb's atomic operations today",
    "Plan the next project today"
]

const TodoList = () => {
  return (
    <div >
        <h1 className="text-sm text-center font-bold lg:text-xl mb-2">Calender</h1>

        <ScrollArea className="max-h-[400px] overflow-y-auto">
           
           {
            todos.map((todo, id)=>(

                <Card key={id}>
            <div className="flex items-center gap-4 px-4">
                <Checkbox id={`item${id}`} />
                <label htmlFor={`item${id}`} className="text-sm">
                    {todo}
                </label>
            </div>
           </Card>
                
            ))
           }
           
        </ScrollArea>
    </div>
  )
}

export default TodoList

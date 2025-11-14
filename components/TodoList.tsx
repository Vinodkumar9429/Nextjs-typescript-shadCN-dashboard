"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar as Calendar1 } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const todos: string[] = [
  "Create a full screen navigation menu animation using GSAP",
  "Add Todo list functionality in the the dashboard",
  "Optimize ads for youtube users",
  "Post about this project on linkedin",
  "Note whatever you've learnt from this project somewhere",
  "Re-implement this sidebar somewhere in the future projects",
  "Checkout all the components of the ShadCN",
  "Finish mongodb's atomic operations today",
  "Plan the next project today",
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-sm text-center font-bold lg:text-xl mb-2">
          Calender
        </h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            className="flex text-sm justify-between items-center bg-popover px-4 py-2 rounded-3xl"
            asChild
          >
            <Button className="group transition-all duration-500 text-foreground hover:text-background ">
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              <Calendar1
                className="text-foreground group-hover:text-background transition-all duration-500"
                size={20}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
                mode="single"
                selected={date}
                onSelect={(date)=>{
                    setDate(date);
                    setOpen(false);
                }}
                className="rounded-md"
             />
          </PopoverContent>
        </Popover>
      </div>

      <ScrollArea className="max-h-[400px] overflow-y-auto mt-2">
        <div className="flex flex-col gap-y-2">
          {todos.map((todo, id) => (
            <Card key={id}>
              <div className="flex items-center gap-4 px-4">
                <Checkbox id={`item${id}`} />
                <label htmlFor={`item${id}`} className="text-sm">
                  {todo}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;

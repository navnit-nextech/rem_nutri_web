import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b pb-5", className)} // Increased padding below the question
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex flex-col">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex items-center gap-3 py-4 w-full text-left transition-all [&[data-state=open]>span>.plus-icon]:rotate-45", 
        className
      )}
      {...props}
    >
      {/* Plus Icon at Start */}
      <span className="flex items-center justify-center h-6 w-6">
        <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 plus-icon text-fizeo-dark-green/70" />
      </span>
      
      {/* Question - No boldness, Increased Padding */}
      <div className="flex-1 text-base sm:text-2xl">{children}</div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pl-[2.5rem]" // Keeps answer aligned under question
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-base sm:text-lg leading-relaxed", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

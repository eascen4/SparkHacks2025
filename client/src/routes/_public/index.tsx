import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function questions() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is TradeSpark?</AccordionTrigger>
          <AccordionContent>
            TradeSpark is a user-oriented platform designed to faciliate
            students in the process of obtaining the courses that they
            desire/require for the semester!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does TradeSpark work?</AccordionTrigger>
          <AccordionContent>
            TradeSpark has several trades published by students that consist of
            2 individual parts: an offer and a bid. The offer is the class
            you're willing to give up and the bid is the class you receive. If a
            student finds a certain offer to be compelling, they may email the
            trader via our application.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What does this solve?</AccordionTrigger>
          <AccordionContent>
            One of the most difficult parts of the semester isn't even within
            the coursework of your schedule, it's just the act of signing up for
            your classes. Registration UIs implemented by schools tend to be
            fairly outdated and difficult to navigate, and if open seat
            notifications are offered to students, it's still mostly a
            free-for-all to obtain your desired schedule. With TradeSpark,
            students are presented with a much more controlled environment that
            allows students to directly communicate in order to complete their
            schedule.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How can I start?</AccordionTrigger>
          <AccordionContent>
            In order to being trading, simply <Link className="text-blue-500" to='/signup'>sign up</Link> or <Link className="text-blue-500" to="/login">login</Link> if you already
            have an account!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1>Welcome to TradeSpark!</h1>
      {questions()}
    </div>
  )
}

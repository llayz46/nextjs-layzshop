import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"

export function ProductFaqAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full space-y-2.5 pt-4">
            <AccordionItem value="item-1">
                <AccordionTrigger>Livraison</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Retours</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Paiement</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur corporis deserunt error ipsum, magni nemo, nobis odio possimus, recusandae sapiente sint!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Garantie</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis eligendi quasi rerum voluptatibus?
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

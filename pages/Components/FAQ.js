import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const FAQ = () => {
    return (
        <div>
           <Accordion defaultIndex={[0]} allowMultiple>

            {/*//////////////////////////////////////////////////////////////// Question No1/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    1. Where does the donations go?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo malesuada id fusce turpis. Consectetur molestie blandit scelerisque varius aliquam. At quam adipiscing praesent tortor fringilla sed sapien pharetra vitae. Nulla donec porta ultrices scelerisque mollis vel sed suspendisse. Nec pretium quisque quam mollis id mauris porta id. Sem mi, vitae id massa tincidunt senectus aliquam. At tortor, urna viverra feugiat quis. Purus accumsan at sagittis vestibulum semper. Quam at gravida neque leo. Dictumst odio risus netus aliquam. Odio venenatis eget rhoncus, aliquet. Varius suspendisse dui blandit lacus, lacinia vestibulum habitasse. Eget lorem ac, risus lectus vivamus id blandit viverra aenean. Nibh vitae mi semper amet et tincidunt sagittis, et ut.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No2/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    2. How to sell books?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo malesuada id fusce turpis. Consectetur molestie blandit scelerisque varius aliquam. At quam adipiscing praesent tortor fringilla sed sapien pharetra vitae. Nulla donec porta ultrices scelerisque mollis vel sed suspendisse. Nec pretium quisque quam mollis id mauris porta id. Sem mi, vitae id massa tincidunt senectus aliquam. At tortor, urna viverra feugiat quis. Purus accumsan at sagittis vestibulum semper. Quam at gravida neque leo. Dictumst odio risus netus aliquam. Odio venenatis eget rhoncus, aliquet. Varius suspendisse dui blandit lacus, lacinia vestibulum habitasse. Eget lorem ac, risus lectus vivamus id blandit viverra aenean. Nibh vitae mi semper amet et tincidunt sagittis, et ut.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No3/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    3. Why Invoicing is must?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo malesuada id fusce turpis. Consectetur molestie blandit scelerisque varius aliquam. At quam adipiscing praesent tortor fringilla sed sapien pharetra vitae. Nulla donec porta ultrices scelerisque mollis vel sed suspendisse. Nec pretium quisque quam mollis id mauris porta id. Sem mi, vitae id massa tincidunt senectus aliquam. At tortor, urna viverra feugiat quis. Purus accumsan at sagittis vestibulum semper. Quam at gravida neque leo. Dictumst odio risus netus aliquam. Odio venenatis eget rhoncus, aliquet. Varius suspendisse dui blandit lacus, lacinia vestibulum habitasse. Eget lorem ac, risus lectus vivamus id blandit viverra aenean. Nibh vitae mi semper amet et tincidunt sagittis, et ut.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No4/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    4. How the books are delivered?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo malesuada id fusce turpis. Consectetur molestie blandit scelerisque varius aliquam. At quam adipiscing praesent tortor fringilla sed sapien pharetra vitae. Nulla donec porta ultrices scelerisque mollis vel sed suspendisse. Nec pretium quisque quam mollis id mauris porta id. Sem mi, vitae id massa tincidunt senectus aliquam. At tortor, urna viverra feugiat quis. Purus accumsan at sagittis vestibulum semper. Quam at gravida neque leo. Dictumst odio risus netus aliquam. Odio venenatis eget rhoncus, aliquet. Varius suspendisse dui blandit lacus, lacinia vestibulum habitasse. Eget lorem ac, risus lectus vivamus id blandit viverra aenean. Nibh vitae mi semper amet et tincidunt sagittis, et ut.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No5/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    5. How to identify Scams?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo malesuada id fusce turpis. Consectetur molestie blandit scelerisque varius aliquam. At quam adipiscing praesent tortor fringilla sed sapien pharetra vitae. Nulla donec porta ultrices scelerisque mollis vel sed suspendisse. Nec pretium quisque quam mollis id mauris porta id. Sem mi, vitae id massa tincidunt senectus aliquam. At tortor, urna viverra feugiat quis. Purus accumsan at sagittis vestibulum semper. Quam at gravida neque leo. Dictumst odio risus netus aliquam. Odio venenatis eget rhoncus, aliquet. Varius suspendisse dui blandit lacus, lacinia vestibulum habitasse. Eget lorem ac, risus lectus vivamus id blandit viverra aenean. Nibh vitae mi semper amet et tincidunt sagittis, et ut.

                </AccordionPanel>
            </AccordionItem>
            </Accordion> 
        </div>
    )
}

export default FAQ

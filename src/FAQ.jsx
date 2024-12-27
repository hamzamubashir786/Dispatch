import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const Section6 = () => {
    return (
        <>
            <div className='bg-[#2679B8] w-full py-8' id='Faq'>
                <div className='flex text-white justify-center gap-5 px-2 py-4 font-bold uppercase text-4xl flex-wrap'>
                    <h1>frequently</h1>
                    <h1 className='text-[#FF7B1B]'>asked</h1>
                    <h1>questions</h1>
                </div>
                <div className='w-full flex justify-center mt-7 px-[5vw] items-center'>
                    <div className="w-full max-w-full">
                        <PlusMinusAccordion />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6;

const PlusMinusAccordion = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderExpandIcon = (isExpanded) => (
        <div className='w-8 h-8 bg-[#2679B8] text-center flex justify-center items-center text-white rounded-full'>
            {isExpanded ? <RemoveIcon /> : <AddIcon />}
        </div>
    );
    return (
        <div className='flex justify-between flex-wrap'>
            <Box sx={{ width: { md: "400px"  } }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel1')}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>How do I start getting loads?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel2')}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>How long does the setup with Dispatch Experts take?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ width: { md: "400px" } }}>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel3')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography c sx={{ fontSize:{xs:"14px" , md:"16px" }}}>Do I need my own MC authority?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px"} }}>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel4')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography sx={{ fontSize:{xs:"14px" , md:"16px" }}}>What type of equipment does Dispatch Experts move?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel5')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>How Much Does it cost?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel6')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>Are there any commitments?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel7')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>Can I decline a load?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel8')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>Does DE help with invoicing and how do I get paid?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ width: { md: "400px" } }}>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className='mb-4 p-2'>
                    <AccordionSummary
                        expandIcon={renderExpandIcon(expanded === 'panel9')}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-gray-200'
                    >
                        <Typography  sx={{ fontSize:{xs:"14px" , md:"16px" }}}>What is a factoring company?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
}

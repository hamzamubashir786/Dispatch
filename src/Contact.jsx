import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from 'antd'
const Contact = ({ btn }) => {

    return (
        <>

            <div className='w-full flex px-2 flex-wrap my-8 items-center' id='setup'>
                <div className='uppercase font-bold text-4xl'>
                    <h1 className=''> Request a</h1>
                    <h1 className='text-[#2679B8]'>Callback</h1>
                </div>
                <div className='lg:w-1/2 mx-auto'>
                    <form className='flex gap-6 justify-center flex-col items-center mt-8' >
                        <Box sx={{ display: "flex", mx: "auto", width: "100%", padding: "10px", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
                            <TextField
                                id="outlined-basic"
                                className="w-full sm:w-[45%] lg:w-[45%] bg-[#E9F1F8]"
                                label="Company Name"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: "#9BA0BA" },
                                }}
                                InputProps={{
                                    style: { color: "#9BA0BA" },
                                    placeholder: "Enter company name",
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        boxShadow: "none",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        padding: "0px",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "#9BA0BA",
                                        opacity: 1,
                                    },
                                }}
                            />


                            <TextField
                                id="outlined-basic"
                                className="w-full sm:w-[45%] lg:w-[45%] bg-[#E9F1F8]"
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: "#9BA0BA" },
                                }}
                                InputProps={{
                                    style: { color: "#9BA0BA" },
                                    placeholder: "Enter Your Email",
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        boxShadow: "none",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        padding: "0px",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "#9BA0BA",
                                        opacity: 1,
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                className="w-full sm:w-[45%] lg:w-[45%] bg-[#E9F1F8]"
                                label="Phone"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: "#9BA0BA" },
                                }}
                                InputProps={{
                                    style: { color: "#9BA0BA" },
                                    placeholder: "Enter Phone Number",
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        boxShadow: "none",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        padding: "0px",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "#9BA0BA",
                                        opacity: 1,
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                className="w-full sm:w-[45%] lg:w-[45%] bg-[#E9F1F8]"
                                label="Details"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: "#9BA0BA" },
                                }}
                                InputProps={{
                                    style: { color: "#9BA0BA" },
                                    placeholder: "Enter Details",
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        boxShadow: "none",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        padding: "0px",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "#9BA0BA",
                                        opacity: 1,
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                className="w-full sm:w-[45%] lg:w-[45%] bg-[#E9F1F8]"
                                label="Promo Code"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: "#9BA0BA" },
                                }}
                                InputProps={{
                                    style: { color: "#9BA0BA" },
                                    placeholder: "Enter company name",
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        boxShadow: "none",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        padding: "0px",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "#9BA0BA",
                                        opacity: 1,
                                    },
                                }}
                            />

                            <FormControl className='w-full sm:w-[45%] lg:w-[45%]  '>
                                <InputLabel id="demo-simple-select-label" sx={{ color: "#9BA0BA" }} >Equipment Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Equipment Type"
                                    className="bg-[#E9F1F8]"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            boxShadow: "none", // Remove shadow
                                            "& fieldset": {
                                                border: "none", // Remove border
                                            },
                                        },
                                        "& .MuiSelect-select": {
                                            color: "#9BA0BA", // Value text color
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "#9BA0BA", // Placeholder color (if placeholder is set)
                                            opacity: 1,
                                        },
                                    }}
                                    >
                                    <MenuItem value="Power">Power Only/Semi</MenuItem>
                                    <MenuItem value="Dry">Dry Van</MenuItem>
                                    <MenuItem value="Reefer">Reefer</MenuItem>
                                    <MenuItem value="Flat">Flat Bed</MenuItem>
                                    <MenuItem value="Step">Step Deck</MenuItem>
                                    <MenuItem value="Box">Box Truck</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl className='w-full sm:w-[45%] lg:w-[45%]  '>
                                <InputLabel id="demo-simple-select-label" sx={{ color: "#9BA0BA" }} >How did you hear about us</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Equipment Type"
                                  className="bg-[#E9F1F8]"
                                  sx={{
                                      "& .MuiOutlinedInput-root": {
                                          boxShadow: "none", // Remove shadow
                                          "& fieldset": {
                                              border: "none", // Remove border
                                          },
                                      },
                                      "& .MuiSelect-select": {
                                          color: "#9BA0BA", // Value text color
                                      },
                                      "& .MuiInputBase-input::placeholder": {
                                          color: "#9BA0BA", // Placeholder color (if placeholder is set)
                                          opacity: 1,
                                      },
                                  }}
                                >
                                    <MenuItem value="Power">Power Only/Semi</MenuItem>
                                    <MenuItem value="Google">Google</MenuItem>
                                    <MenuItem value="Youtube">Youtube</MenuItem>
                                    <MenuItem value="Referral">Referral</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl className='w-full sm:w-[45%] lg:w-[45%]  '>
                                <InputLabel id="demo-simple-select-label" sx={{ color: "#9BA0BA" }} >Home State</InputLabel>
                                <Select
                                     labelId="demo-simple-select-label"
                                     id="demo-simple-select"
                                     label="Equipment Type"
                                     className="bg-[#E9F1F8]"
                                     sx={{
                                         "& .MuiOutlinedInput-root": {
                                             boxShadow: "none", // Remove shadow
                                             "& fieldset": {
                                                 border: "none", // Remove border
                                             },
                                         },
                                         "& .MuiSelect-select": {
                                             color: "#9BA0BA", // Value text color
                                         },
                                         "& .MuiInputBase-input::placeholder": {
                                             color: "#9BA0BA", // Placeholder color (if placeholder is set)
                                             opacity: 1,
                                         },
                                     }}
                                >
                                    <MenuItem value="Alabama" >Alabama</MenuItem>
                                    <MenuItem value="Alaska">Alaska</MenuItem>
                                    <MenuItem value="Arizona">Arizona</MenuItem>
                                    <MenuItem value="Arkansas">Arkansas</MenuItem>
                                    <MenuItem value="California">California</MenuItem>
                                    <MenuItem value="Colorado">Colorado</MenuItem>
                                    <MenuItem value="Connecticut">Connecticut</MenuItem>
                                    <MenuItem value="Delaware">Delaware</MenuItem>
                                    <MenuItem value="Florida">Florida</MenuItem>
                                    <MenuItem value="Georgia">Georgia</MenuItem>
                                    <MenuItem value="Hawaii">Hawaii</MenuItem>
                                    <MenuItem value="Idaho">Idaho</MenuItem>
                                    <MenuItem value="Illinois">Illinois</MenuItem>
                                    <MenuItem value="Indiana">Indiana</MenuItem>
                                    <MenuItem value="Iowa">Iowa</MenuItem>
                                    <MenuItem value="Kansas">Kansas</MenuItem>
                                    <MenuItem value="Kentucky">Kentucky</MenuItem>
                                    <MenuItem value="Louisiana">Louisiana</MenuItem>
                                    <MenuItem value="Maine">Maine</MenuItem>
                                    <MenuItem value="Maryland">Maryland</MenuItem>
                                    <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                                    <MenuItem value="Michigan">Michigan</MenuItem>
                                    <MenuItem value="Minnesota">Minnesota</MenuItem>
                                    <MenuItem value="Mississippi">Mississippi</MenuItem>
                                    <MenuItem value="Missouri">Missouri</MenuItem>
                                    <MenuItem value="Montana">Montana</MenuItem>
                                    <MenuItem value="Nebraska">Nebraska</MenuItem>
                                    <MenuItem value="Nevada">Nevada</MenuItem>
                                    <MenuItem value="New Hampshire">New Hampshire</MenuItem>
                                    <MenuItem value="New Jersey">New Jersey</MenuItem>
                                    <MenuItem value="New Mexico">New Mexico</MenuItem>
                                    <MenuItem value="New York">New York</MenuItem>
                                    <MenuItem value="North Carolina">North Carolina</MenuItem>
                                    <MenuItem value="North Dakota">North Dakota</MenuItem>
                                    <MenuItem value="Ohio">Ohio</MenuItem>
                                    <MenuItem value="Oklahoma">Oklahoma</MenuItem>
                                    <MenuItem value="Oregon">Oregon</MenuItem>
                                    <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                                    <MenuItem value="Rhode Island">Rhode Island</MenuItem>
                                    <MenuItem value="South Carolina">South Carolina</MenuItem>
                                    <MenuItem value="South Dakota">South Dakota</MenuItem>
                                    <MenuItem value="Tennessee">Tennessee</MenuItem>
                                    <MenuItem value="Texas">Texas</MenuItem>
                                    <MenuItem value="Utah">Utah</MenuItem>
                                    <MenuItem value="Vermont">Vermont</MenuItem>
                                    <MenuItem value="Virginia">Virginia</MenuItem>
                                    <MenuItem value="Washington">Washington</MenuItem>
                                    <MenuItem value="West Virginia">West Virginia</MenuItem>
                                    <MenuItem value="Wisconsin">Wisconsin</MenuItem>
                                    <MenuItem value="Wyoming">Wyoming</MenuItem>
                                </Select>
                            </FormControl>

                        </Box>
                        <div className='w-full text-center'>
                            <Button className={`${btn} px-6 py-6 rounded-none font-semibold tracking-wide`}>Start Moving Today</Button>
                        </div>
                    </form>

                </div>
            </div>


        </>
    )
}

export default Contact
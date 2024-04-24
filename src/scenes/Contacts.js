import React from 'react'
import LineGradient from '../components/LineGradient'
import {useForm} from 'react-hook-form'
import { motion } from 'framer-motion'

const Contacts = () => {
    const{
        register,
        trigger,
        formState: { errors },
    } = useForm()

    const onSubmit = async (e)=>{
        console.log("~e",e)
        const isValid = await trigger()
        if(!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id="contact" className="py-40">
        {/* Headings */}
        <motion.div
        className='flex justify-center w-full'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
        }}
        >
            <div>
                <p className="font-playfair font-semibold text-4xl text-red">CONTACT
                <span className="text-white"> ME</span>
                </p>
                <div className='flex md:justify-end my-5'>
                    <LineGradient width='mx-auto w-2/4'/>
                </div>
            </div>

        </motion.div>
        {/* Form & Image */}
        <div className="md:flex md:justify-center gap-16 mt-5">
            <motion.div
            className='basis-1/2 mt-10 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.2, duration:0.5}}
            variants={{
                hidden:{opacity:0, y:-50},
                visible:{opacity:1, y:0}
            }}
            >
                <form target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/20bd1a1223@gmail.com"
                method="POST"
                >
                    <input type="text" 
                    className='w-full font-semibold placeholder-opaque-black p-3 text-black'
                    placeholder='NAME'
                    {...register("name",{
                        required:true,
                        maxLength:100,
                    })
                    }
                     />
                     {
                        errors.name && (
                            <p
                            className=' mt-1'
                            >
                                {errors.name.type === 'required' && "This field is required."}
                                {errors.name.type === 'maxLength' && "Max length is 100 char."}

                            </p>
                        )
                    }
                    <input type="email" 
                    className='w-full font-semibold placeholder-opaque-black p-3 mt-5 text-black'
                    placeholder='abc@gmail.com'
                    {
                        ...register("email",{
                            required:true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })
                    }
                    />
                    {
                        errors.email && (
                            <p
                            className=' mt-1'
                            >
                                {errors.email.type === 'required' && "This field is required."}
                                {errors.email.type === 'pattern' && "Invalid email address"}
                            </p>
                        )
                    }
                    <textarea name="message"  cols="50" rows="4"
                    className='w-full mt-5 p-3 text-black font-semibold placeholder-opaque-black'
                    placeholder='message'
                    {...register('message',{
                        required: true,
                        maxLength:200,
                    })}
                    >
                        {
                            errors.message && (
                                <p>
                                    {errors.message.type === 'required' && "This field is required."}
                                    {errors.message.type === 'maxLength' && "Max length is 200 char."}
                                </p>
                            )
                        }
                    </textarea>
                    <button className="p-5 bg-yellow rounded-md font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500 mt-5"
                    type='submit'>
                        SEND ME A MESSAGE
                    </button>
                </form>
            </motion.div>
        </div>
    </section>
  )
}

export default Contacts

import React from 'react'
import {useForm, ValidationError} from '@formspree/react';
import style from "@/app/style";
import Heading from "@/components/Heading";
import {motion} from "framer-motion";
import {SocialIcon} from "react-social-icons/component";
import Link from "next/link";
import {BiMailSend} from "react-icons/bi";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xkndkajw");

    return (
        <section className={`flex flex-col ${style.paddingX} py-[3rem] lg:py-[8.5rem] gap-[1rem] relative z-0`}>
            <div
                className={`absolute z-[-2] w-80 h-80 blues__gradient rounded-full blur-[150px] top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2`}/>
            <div className={`flex flex-col md:flex-row gap-[2rem]`}>
                <div className={`flex flex-1 flex-col gap-[1rem]`}>
                    <Heading heading={`CONTACT ME`}/>
                    <h1 className={`text-white font-manrope font-bold text-[18px]`}>Let&apos;s Connect</h1>
                    <p className={`${style.paragraph}`}>I&apos;m currently looking for new opportunities, my inbox is
                        always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get
                        back to you!</p>
                    <div className={`flex flex-row gap-[1rem]`}>
                        <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`linkedin`}
                                                                                             href={`https://www.linkedin.com/in/wisdom-richard-3b6407171/`}
                                                                                             style={{
                                                                                                 height: 50,
                                                                                                 width: 50
                                                                                             }}
                                                                                             bgColor={`#18191E`}
                                                                                             fgColor={`#0072b1`}
                        />
                        </motion.div>
                        <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`github`}
                                                                                             style={{
                                                                                                 height: 50,
                                                                                                 width: 50
                                                                                             }}
                                                                                             href={`https://github.com/WisdomRichard`}
                                                                                             fgColor={`#ffffff`}
                                                                                             bgColor={`#18191E`}
                        />
                        </motion.div>
                        <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`whatsapp`}
                                                                                             style={{
                                                                                                 height: 50,
                                                                                                 width: 50
                                                                                             }}
                                                                                             href={`https://wa.me/2348147515300`}
                                                                                             bgColor={`#18191E`}
                                                                                             fgColor={`#128c7e`}
                        />
                        </motion.div>
                    </div>
                </div>
                <div className={`flex flex-col flex-1`}>
                    <form className={`flex flex-col gap-[1rem] relative`}
                          onSubmit={handleSubmit}
                          action="https://formspree.io/f/xkndkajw"
                          method="POST"
                    >
                        <div className={`flex flex-col gap-[0.5rem]`}>
                            <label className={`text-white font-manrope text-[14px] font-medium ml-2`}
                                   htmlFor={`name`}>
                                Name
                            </label>
                            <input type='text'
                                   id='name'
                                   name='name'
                                   required
                                   className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-dimWhite text-[14px] rounded-lg p-2.5 w-full`}
                                   placeholder={`John Doe`}
                            />
                            <ValidationError errors={state.errors}
                                             prefix={`Name`}
                                             field={`name`}
                            />
                        </div>
                        <div className={`flex flex-col gap-[0.5rem]`}>
                            <label className={`text-white font-manrope text-[14px] font-medium ml-2`}
                                   htmlFor={`email`}>
                                Email
                            </label>
                            <input type='email'
                                   id='email'
                                   name='email'
                                   required
                                   className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-dimWhite text-[14px] rounded-lg p-2.5 w-full`}
                                   placeholder={`abc@gmail.com`}
                            />
                            <ValidationError errors={state.errors}
                                             prefix={`Email`}
                                             field={`email`}
                            />
                        </div>
                        <div className={`flex flex-col gap-[0.5rem]`}>
                            <label className={`text-white font-manrope text-[14px] font-medium ml-2`}
                                   htmlFor={`message`}>
                                Message
                            </label>
                            <textarea id='message'
                                      name='message'
                                      required
                                      className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-dimWhite text-[14px] rounded-lg p-2.5 w-full`}
                                      placeholder={`Let's talk about...`}
                            />
                            <ValidationError errors={state.errors}
                                             prefix={`Message`}
                                             field={`message`}
                            />
                        </div>
                        <button type={`submit`}
                                className={`px-1 py-1 rounded-[10px] bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 disabled:opacity-35 text-white mt-1 mb-2 font-medium w-full`}
                                disabled={state.submitting}
                        >
                            <div
                                className={`flex w-full sm:fit bg-[#121212] justify-center items-center hover:bg-white hover:text-black hover:border hover:border-black rounded-[10px] px-5 py-2`}
                            >
                                Submit Message <BiMailSend className={`w-5 ml-1`}/>
                            </div>
                        </button>
                        {state.succeeded && (
                            <p className={`text-green-600 font-manrope font-medium text-sm absolute -bottom-7 left-2`}>
                                Message Sent Successfully!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactForm

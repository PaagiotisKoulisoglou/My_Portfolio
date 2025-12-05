import {socials} from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/egw.jpg" alt="Panos" className="w-20 rounded-full" />

                <h3>Let's Connect</h3>
                <p>Got a cool idea, a project, or just want to chat about tech?Let’s talk.</p>
                <p>panagiotiskoulisoglou@gmail.com</p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{ backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}x
                </ul>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;

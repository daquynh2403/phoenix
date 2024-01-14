import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function RateForm() {
  const [rate, setRate] = useState(0);
  const [hoverRate, setHoverRate] = useState(0);
  const form = useRef(null);
  const SERVICE_ID = "service_4uljuhk";
  const TEMPLATE_ID = "template_w0snlm8";
  const PUBLIC_KEY = "C92VGDY_XkUT6t0oV";

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        event.target.reset();
        setRate(0);
        setHoverRate(0);
        alert("Sent to Quin's gmail. Thank you!");
      })
      .catch((err) => {
        console.error(err.text);
        alert("Oops! Something went wrong!");
      });
  };

  return (
    <form className="w-1/3 mx-auto" ref={form} onSubmit={sendEmail}>
      <div className="text-lg font-semibold tracking-wider">
        RATE MY WEBSITE FOR IMPROVEMENT
      </div>
      <div className="mt-3">
        <label className="text-base font-extralight p-2">Name</label>
        <input
          placeholder="John Doe"
          className="font-thin block w-96 p-2 border-2 rounded-lg"
          name="name"
          type="text"
        />
      </div>
      <div className="mt-3">
        <label className="text-base font-extralight p-2">Email</label>
        <input
          placeholder="johndoe@gmail.com"
          type="email"
          className="font-thin block w-96 p-2 border-2 rounded-lg"
          name="email"
        />
      </div>
      {Array.from({ length: 5 }, (_, k) => k + 1).map((item, index) => (
        <div key={index} className="pt-3 text-2xl inline-flex">
          <label
            htmlFor={`star_${item}`}
            className={`${
              rate <= item - 1 ? "text-slate-300" : "text-yellow-400"
            }
              ${
                hoverRate <= item - 1 ? "text-slate-300" : "text-yellow-400"
              } transition-all duration-300`}
            onClick={() => setRate(item)}
            onMouseMove={() => setHoverRate(item)}
            onMouseLeave={() => setHoverRate(0)}
          >
            <FontAwesomeIcon icon={faStar} />
          </label>
          <input
            id={`star_${item}`}
            type="radio"
            value={item}
            name="rate"
            className="hidden"
          />
        </div>
      ))}
      <div className="mt-3">
        <label className="text-base font-extralight p-2">Message</label>
        <textarea
          placeholder="Your message"
          className="font-thin block w-96 p-2 border-2 rounded-lg"
          name="message"
        />
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="border border-slate-500 text-slate-700 text-base font-semibold px-3 py-1 rounded hover:text-white hover:bg-slate-700 transition-all duration-500"
        >
          Send
        </button>
      </div>
    </form>
  );
}

RateForm.propTypes = {};

export default RateForm;

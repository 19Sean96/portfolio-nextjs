import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledContactSection } from "../../components/StyledComponents";
import { GithubSVG, LinkedInSVG } from "../../components/SvgIcons";
import NumberFormat from "react-number-format";

export default function Contact() {
  const [ref, inView, entry] = useInView({
    threshold: 0.365,
  });

  const router = useRouter();
  useEffect(() => {
    console.log(inView);
    if (inView) router.push("/", "/contact", { shallow: true });
    else if (!inView && router.asPath !== "/contact")
      router.push("/", router.asPath, { shallow: true });
    else router.push("/", undefined, { shallow: true });
  }, [inView]);

  return (
    <StyledContactSection
      id="contact"
      className="contact page"
      inView={inView}
      ref={ref}
      name="contact"
    >
      <div className="contact__wrapper">
        <div className="contact--title">Contact</div>
        <div className="contact--details">
          <div className="contact--details__item contact--details__phone">
            480.526.0704
          </div>
          <div className="contact--details__item contact--details__email">
            Me@Seananthony.io
          </div>
          <div className="contact--details--social__wrapper">
            <div className="contact--details--social__item">
              <GithubSVG />
            </div>
            <div className="contact--details--social__item">
              <LinkedInSVG />
            </div>
          </div>
        </div>
        <div className="contact--form__wrapper">
          <div className="contact--form--title">shoot me a message</div>
          <NetlifyForm />
        </div>
      </div>
    </StyledContactSection>
  );
}

const NetlifyForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact--form"
      method="POST"
      data-netlify="true"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact--input__wrapper">
        <label htmlFor="name" className="contact--input__label">
          Name
        </label>
        <input
          name="name"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.name && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--input__wrapper">
        <label htmlFor="number" className="contact--input__label">
          Number
        </label>
        <NumberFormat
          name="number"
          format="+1 (###) ###-####"
          mask="_"
          getInputRef={register({ required: true })}
          className="contact--input"
        />
        {errors.number && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>{" "}
      <div className="contact--input__wrapper">
        <label htmlFor="email" className="contact--input__label">
          Email
        </label>
        <input
          name="email"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.email && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--input__wrapper">
        <label htmlFor="message" className="contact--input__label">
          Message
        </label>
        <input
          name="message"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.message && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--submit__wrapper">
        <input className="contact--submit" type="submit" />
      </div>
    </form>
  );
};

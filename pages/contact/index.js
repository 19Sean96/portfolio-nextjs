import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledContactSection } from "../../components/StyledComponents"
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
            <div className="contact--details__item contact--details__phone">480.526.0704</div>
            <div className="contact--details__item contact--details__email">Me@Seananthony.io</div>
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
    <form onSubmit={handleSubmit(onSubmit)} className="contact--form">
      <div className="contact--input__wrapper">
        <input
          name="name"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className="contact--input__wrapper">
        <NumberFormat
          name="number"
          format="+1 (###) ###-####"
          mask="_"
          getInputRef={register({ required: true })}
          className="contact--input"
        />
        {errors.number && <span>This field is required</span>}
      </div>{" "}
      <div className="contact--input__wrapper">
        <input
          name="email"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
  );
};

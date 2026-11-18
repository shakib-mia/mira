"use client";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
export function ContactForm() {
	const [mode, setMode] = useState<"appointment" | "message">("appointment");
	const [done, setDone] = useState(false);
	function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!e.currentTarget.reportValidity()) return;
		setDone(true);
	}
	const [minDate, setMinDate] = useState("");
	useEffect(() => {
		setMinDate(new Date().toISOString().split("T")[0]);
	}, []);
	return (
		<div className="form-panel">
			<div className="form-tabs" role="tablist" aria-label="Enquiry type">
				<button
					role="tab"
					aria-selected={mode === "appointment"}
					className={mode === "appointment" ? "active" : ""}
					onClick={() => {
						setMode("appointment");
						setDone(false);
					}}
				>
					Appointment request
				</button>
				<button
					role="tab"
					aria-selected={mode === "message"}
					className={mode === "message" ? "active" : ""}
					onClick={() => {
						setMode("message");
						setDone(false);
					}}
				>
					Just a question
				</button>
			</div>
			{done ? (
				<div className="success-state" role="status">
					<span className="eyebrow">DEMO PREVIEW</span>
					<h3>Your details look good.</h3>
					<p>
						This is a demonstration form, so nothing has been sent
						or booked. To enquire directly, please call or use the
						WhatsApp link on this page.
					</p>
					<button onClick={() => setDone(false)}>
						Start another enquiry ↗
					</button>
				</div>
			) : (
				<>
					<h2>
						{mode === "appointment"
							? "Let’s find your time."
							: "Let’s talk."}
					</h2>
					<p>
						{mode === "appointment"
							? "Tell us a little about the appointment you have in mind."
							: "Have a question before booking? We're all ears."}
					</p>
					<form onSubmit={submit}>
						<div className="form-fields">
							<div className="form-field">
								<label htmlFor="name">Your name *</label>
								<input
									id="name"
									name="name"
									required
									minLength={2}
									placeholder="Your full name"
									autoComplete="name"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="email">Email address *</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="you@example.com"
									autoComplete="email"
								/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">Phone number *</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									required
									pattern="[+]?[0-9 ()-]{10,18}"
									title="Enter a valid phone number"
									placeholder="+91 98765 43210"
									autoComplete="tel"
								/>
							</div>
							{mode === "appointment" && (
								<>
									<div className="form-field">
										<label htmlFor="service">
											Interested in *
										</label>
										<select
											id="service"
											name="service"
											required
											defaultValue=""
										>
											<option value="" disabled>
												Select a service
											</option>
											<option>
												Hair styling or treatments
											</option>
											<option>Hair colouring</option>
											<option>
												Facials and skin care
											</option>
											<option>Bridal makeup</option>
											<option>Pre-bridal packages</option>
											<option>Party makeup</option>
											<option>Nails and grooming</option>
											<option>Not sure yet</option>
										</select>
									</div>
									<div className="form-field full">
										<label htmlFor="date">
											Preferred date
										</label>
										<input
											id="date"
											name="date"
											type="date"
											min={minDate}
										/>
									</div>
								</>
							)}
							<div className="form-field full">
								<label htmlFor="message">
									{mode === "appointment"
										? "Anything we should know?"
										: "Your message *"}
								</label>
								<textarea
									id="message"
									name="message"
									required={mode === "message"}
									minLength={
										mode === "message" ? 10 : undefined
									}
									placeholder="Tell us what you're thinking..."
								/>
							</div>
						</div>
						<button className="form-submit" type="submit">
							Preview request <ArrowUpRight size={17} />
						</button>
						<p className="form-note">
							Demo only — this form does not send a message or
							reserve an appointment. Please call or WhatsApp us
							to make a real enquiry.
						</p>
					</form>
				</>
			)}
		</div>
	);
}

import "../Cryptech.css";
import { useEffect } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Canara_QR from "../assets/canara_qr.png";

function Cryptech() {
	const options = { threshold: 0.1 };

	useEffect(() => {
		const faders = document.querySelectorAll(".fade-in");
		const appearOnScroll = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("appear");
			});
		}, options);

		faders.forEach((fader) => {
			appearOnScroll.observe(fader);
		});

		return () => {
			faders.forEach((fader) => {
				appearOnScroll.unobserve(fader);
			});
		};
	}, [options]);

	return (
		<>
			<Navbar />
			<div className="page-container">
				<div className="cryptech-left-bar">
					<h1>Register for Cryptech</h1>
					<p>Cryptech is a flagship event we are starting for the students who aspire to achieve mental excellence in various fields. It is open to two categories - Class 9 & 10, Class 11 & 12.</p>
					<img src={Canara_QR} alt="qr_code" />
				</div>
				<form action="/" className="cryptech-right-bar">
					<h1>Ensure that you have paid before submitting the form</h1>

					{/* Team Name */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 576 512">
								<path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z" />
							</svg>
						</div>
						<input className="cryptech-input" id="team" type="text" placeholder="Team Name" />
					</div>
					{/* Name 1 */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 448 512">
								<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
							</svg>
						</div>
						<input className="cryptech-input" id="name1" type="text" placeholder="Member 1 Name" />
					</div>
					{/* Email 1 */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 512 512">
								<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
							</svg>
						</div>
						<input className="cryptech-input" id="email1" type="email" placeholder="Member 1 Email ID" />
					</div>
					{/* Name 2 */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 448 512">
								<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
							</svg>
						</div>
						<input className="cryptech-input" id="name2" type="text" placeholder="Member 2 Name" />
					</div>
					{/* Email 2 */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 512 512">
								<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
							</svg>
						</div>
						<input className="cryptech-input" id="email2" type="email" placeholder="Member 2 Email ID" />
					</div>
					{/* Transaction ID */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 576 512">
								<path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
							</svg>
						</div>
						<input className="cryptech-input" id="txnid" type="text" placeholder="Transaction ID after Paying ₹.XX" />
					</div>
					{/* Class */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 640 512">
								<path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
							</svg>
						</div>
						<select className="cryptech-input" name="class" id="class">
							<option selected={true} disabled={true} value="">
								Choose Class
							</option>
							<option value="9">IX</option>
							<option value="10">X</option>
							<option value="11">XI</option>
							<option value="12">XII</option>
						</select>
					</div>
					{/* City */}
					<div className="cryptech-input-div">
						<div className="cryptech-icons">
							<svg height="1.25rem" viewBox="0 0 384 512">
								<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
							</svg>
						</div>
						<select className="cryptech-input" name="city" id="city">
							<option selected={true} disabled={true} value="">
								Choose City
							</option>
							<option value="patna">Patna</option>
							<option value="city1">City 1</option>
							<option value="city2">City 2</option>
							<option value="city3">City 3</option>
						</select>
					</div>

					<input type="submit" className="cryptech-submit" value="Register for Cryptech" />
				</form>
			</div>
			<Footer />
		</>
	);
}

export default Cryptech;

import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs" class="texturebg">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2>Delicious Flavor of Autumn</h2>
				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">{state.companyInfo.location}</div>
							<h6 class="Address">
								435 Main Street
								<br />
								Hollywood, CA 12402
							</h6>
							<p>
								<strong>email:</strong>{' '}
								<a href="mailto:info@primesteak.com">info@primesteak.com</a>
							</p>
							<div class="line"></div>
						</div>
						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title">342-346-6789</div>
							<h6>Lunch Service:</h6>
							<p>
								Friday, Saturday and Sunday
								<br />
								from 12pm - 1:30pm
							</p>
							<h6>Dinner Service:</h6>
							<p>
								Daily
								<br />
								from 6pm - 9:30pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

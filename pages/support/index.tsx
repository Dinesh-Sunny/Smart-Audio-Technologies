import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Support = () => {
  return (
    <>
      <Head>
        <title>Support | Smart Audio Technologies</title>
        <meta
          name="description"
          content="Smart Audio Technologies Support - Scan UK Official Partner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        data-theme="smartaudiotheme"
        className="relative bg-white overflow-hidden text-primary leftWaveFormBg bg-no-repeat "
      >
        <Header />
        <section className="relative bg-gradient-gray2 overflow-hidden">
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-wrap -m-6 md:pb-0">
              <div className=" w-full md:w-1/2 p-6">
                <img
                  className="self-end"
                  src="/assets/images/smartaudiotechnologies customer supoprt.png"
                  alt="Customer Support"
                />
              </div>
              <div className="flex w-full md:w-1/2 pt-28">
                <div className="self-end flex flex-wrap -m-4 md:pb-24">
                  <div className="md:max-w-lg">
                    <h2 className="mb-5 font-heading font-semibold text-4xl sm:text-6xl text-gray-900">
                      We’ve got your back!
                    </h2>
                    <p className="text-gray-600 text-lg">
                      <a href="https://www.scan.co.uk/business" target="_blank">
                        SCAN UK
                      </a>{' '}
                      are our trusted partners for Order Fulfillment and
                      Customer Support
                    </p>
                  </div>
                  <div className="w-full py-8">
                    <div className="md:max-w-lg px-8 py-7 bg-white rounded-10 bg-gray-100">
                      <div>
                        <h3 className="mb-3 font-heading font-bold text-xl text-gray-900">
                          Live Chat{' '}
                        </h3>
                        <p className="mb-8 text-gray-600 text-lg">
                          Live chat is available from 9am to 7.30pm weekdays,
                          10am to 4pm Saturdays and 10am to 2pm Sundays.
                        </p>
                        <Link href="https://www.scan.co.uk/help/scan/contact/contact-customer-services">
                          <a target="_blank">
                            <button className="btn btn-primary ">
                              Click here
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-1 ">
                    <div className="md:max-w-lg px-8 py-7 bg-white rounded-10 bg-gray-100">
                      <div>
                        <h3 className="mb-3 font-heading font-bold text-xl text-gray-900">
                          Telephone
                        </h3>
                        <p className="mb-8 text-gray-600 text-lg">
                          Call us on +44 (0) 1204 474747
                          <br /> <br />
                          Telephone lines are open from 9am to 7.30pm weekdays,
                          10am until 4pm Saturdays and 10am until 2pm on
                          Sundays.
                          <br /> <br />
                          <span className="text-sm">
                            * During the call, the invoice number and the
                            customers contact details will be verified to ensure
                            we are able to contact them.
                          </span>
                          <br />
                          <span className="text-sm">
                            Support will be given on the call and a return
                            issued where needed
                          </span>
                        </p>
                        <Link href="https://secure.scan.co.uk/web/callback">
                          <a target="_blank">
                            <button className="btn btn-primary ">
                              Request Callback
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-3 ">
                    <div className="md:max-w-lg px-8 py-7 bg-white rounded-10 bg-gray-100">
                      <div>
                        <h3 className="mb-3 font-heading font-bold text-xl text-gray-900">
                          Online Queries
                        </h3>
                        <p className="mb-8 text-gray-600 text-lg">
                          Online queries can be raised 24 hours a day and will
                          be responded to between the hours of 9am to 7.30pm
                          weekdays, 10am until 4pm Saturdays and 10am until 2pm
                          Sundays
                          <br />
                          <br />
                          <span className="text-sm">
                            * An online query can be created via a form that can
                            be raised using the below link on our website,
                            scan.co.uk
                          </span>
                        </p>
                        <Link href="https://www.scan.co.uk/help/orders/returns/returning-an-item">
                          <a target="_blank">
                            <button className="btn btn-primary ">
                              Contact Us
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-3 ">
                    <div className="md:max-w-lg px-8 py-7 bg-white rounded-10 bg-gray-100">
                      <span className="text-sm pt-5">
                        <strong>Disclaimer:</strong> Smart Audio Technologies
                        will be sharing the customer information with SCAN UK in
                        accordance to the UK Data Privacy Laws in order to
                        deliver the best Order Fulfillment and Customer Support
                        experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  )
}

export default Support

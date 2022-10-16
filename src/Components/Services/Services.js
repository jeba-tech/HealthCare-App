import React from 'react';
import Service from './Service';
import './Services.css';
import dental from '../../assets/images/dental.png'
import medicine from '../../assets/images/medicine.jpg'
import Cardiologists from '../../assets/images/Cardiologists.png'
import Dermatologists from '../../assets/images/Dermatologists.png'
import Infectious from '../../assets/images/Infectious.png'
import neurologists from '../../assets/images/neurologists.jpg'

const Services = () => {
      const services = [
            {
                  _id: 1,
                  name: "Flouride Treatment",
                  description: "Fluoride treatments are a great way to prevent more cavities in patients who are already prone to them.You know you should floss daily, but do you? If your oral hygiene is not ideal, fluoride could be just the thing to keep your neglect from leading to cavities between your teeth",
                  photograph: dental
            },
            {
                  _id: 2,
                  name: "Medicine Specialists",
                  description: "These doctors make life-or-death decisions for sick and injured people, usually in an emergency room. Their job is to save lives and to avoid or lower the chances of disability.",
                  photograph: medicine
            },
            {
                  _id: 3,
                  name: "Cardiology Treatment",
                  description: "They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.",
                  photograph: Cardiologists
            },
            {
                  _id: 4,
                  name: "Dermatology Treatment",
                  description: "Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.",
                  photograph: Dermatologists
            },
            {
                  _id: 5,
                  name: "Infectious Disease Treatment",
                  description: "They diagnose and treat infections in any part of your body, like fevers, Lyme disease, pneumonia, tuberculosis, and HIV and AIDS. Some of them specialize in preventive medicine or travel medicine.",
                  photograph: Infectious
            },
            {
                  _id: 6,
                  name: "Neurology Treatment",
                  description: "Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's disease.",
                  photograph: neurologists
            }
      ]
      return (
            <div >
                  <h2 className='mb-5 service-title'><b>Services</b> </h2>
                  <div className='grid'>
                        {
                              services.map(service => <Service
                                    key={service._id}
                                    service={service}
                              ></Service>)
                        }
                  </div>


            </div >
      );
};

export default Services;
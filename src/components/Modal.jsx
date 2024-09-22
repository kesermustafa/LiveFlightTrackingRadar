import React, {useEffect} from 'react';
import {SlClose} from "react-icons/sl";
import Tooltips from "./Tooltips.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getInfo} from "../redux/actions/index.js";
import Loading from "./loading/Loading.jsx";
import Error from "./Error.jsx";
import {IoAirplaneOutline} from "react-icons/io5";
import formatDate from "../utils/formatDate.js";
import {GiAirplaneArrival, GiAirplaneDeparture} from "react-icons/gi";

const Modal = ({id, close}) => {

    const {isLoading, error, info} = useSelector((store) => store.info);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo(id));
    }, [id]);

    console.log(info)

    const imageUrl = info?.aircraft?.images?.large?.[0]?.src
        ? info.aircraft.images.large[0].src
        : info?.aircraft?.images?.thumbnails?.[0]?.src;

    return (

        <div className="modal-outer">
            <div className="modal-inner">

                {isLoading ? <Loading/> : error ? <Error msg={error}/> : (
                    info &&
                    <div className='info '>
                        <div className="modal-header mb-4 d-flex justify-content-between align-items-center">
                            <div className='d-flex gap-3 align-items-center justify-content-center'>
                                <Tooltips desings={'text-warning fs-5'} title={info.identification.callsign}  tooltipText={"Call Sing"}/>
                                <Tooltips desings={'text-info fs-6'} title={info.identification.number.default} tooltipText={"Ucus Kodu"}/>
                                <Tooltips desings={'text-success fw-bold fs-6'} title={info.aircraft?.registration} tooltipText={"Kuyruk Kodu"}/>
                            </div>

                            <SlClose onClick={close} size={'24px'}/>
                        </div>

                        <div className='info-wrapper'>
                            <div className='d-flex  flex-column gap-2'>

                                <h4>{info?.airline?.name}</h4>

                                <img className='info-img' src={
                                    info?.aircraft?.images?.large?.[0]?.src
                                        ? info.aircraft.images.large[0].src
                                        : info?.aircraft?.images?.medium?.[0]?.src
                                            ? info.aircraft.images.medium[0].src
                                            : info?.aircraft?.images?.thumbnails?.[0]?.src
                                }/>

                                <div className='d-flex align-items-center justify-content-between '>
                                    <h5>{info.aircraft?.model?.text}</h5>
                                    <h5>{info.aircraft?.model?.code}</h5>
                                </div>

                                <div
                                    className='d-flex position-relative border border-dark-subtle  justify-content-around  '>

                                    <div
                                        className='d-flex p-2 text-center w-100  border border-dark-subtle flex-column '>
                                        <span
                                            className={'text-warning fw-semibold'}> {info.airport?.origin?.code.iata} </span>
                                        <a className='text-decoration-none text-white text-truncate '
                                           href={info.airport?.origin?.website} target='_blank'> <span
                                            className='text-warning fw-semibold'> </span> {info.airport?.origin?.name.split(' ')[0]}
                                        </a>
                                    </div>

                                    <div
                                        className='d-flex p-2 flex-column w-100 border border-dark-subtle  text-center align-items-center  justify-content-center '>
                                        <span
                                            className={'text-warning fw-semibold'}>{info.airport?.destination?.code.iata} </span>
                                        <a className='text-decoration-none text-white text-truncate '
                                           href={info.airport?.destination?.website} target='_blank'> <span
                                            className='text-warning fw-semibold'> </span> {info.airport?.destination?.name.split(' ')[0]}
                                        </a>
                                    </div>

                                    <div className='plane-icon'>
                                        <IoAirplaneOutline size={'32px'}/>

                                    </div>
                                </div>

                                <div className='d-flex w-100 justify-content-between '>
                                    <div className='d-flex border justify-content-center align-items-center flex-column gap-1 w-100 '>
                                        <p className='w-100 text-center pt-2'> <GiAirplaneDeparture color="dodgerblue" size='28px'/> Kalkis</p>
                                        <p className='fs-6 pb-2'> {formatDate(info.time.scheduled.departure)}</p>
                                    </div>

                                    <div className='d-flex border justify-content-center align-items-center flex-column gap-1 w-100'>
                                        <p  className='w-100 text-center pt-2'> <GiAirplaneArrival color="green" size='28px' /> Varis </p>
                                        <p className='fs-6 pb-2'>{formatDate(info.time.scheduled.arrival)}</p>
                                    </div>
                                </div>


                            </div>

                            <p className={`alert ${info.status.icon}`}>
                                <span>{info.status.text}</span>
                            </p>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Modal;

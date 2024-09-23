import React, {useState} from 'react';
import {useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import Loading from "../components/loading/Loading.jsx";
import Error from "../components/Error.jsx";
import ReactPaginate from 'react-paginate';
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";

const List = ({setDetailId}) => {

    const {isLoading, error, flights} = useSelector((state) => state.flight);



    const [start, setStart] = useState(0)

    const perPage = 10;

    const end = start + perPage;

    const currendFlights = flights.slice(start, end)

    const totalPage = Math.ceil(flights.length/10);

    if (isLoading) return <Loading/>;

    if (error) return (
        <div className='mt-4'>
            <Error msg={error}/>
        </div>);

    const handlePageClick = (event)=>{

       setStart(event.selected * perPage)
    }

    return (
        <div className='p-3 table-wrapper mx-auto p-md-4'>
            <table className="table table-dark mt-3 table-hover table-responsive table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Kuyruk Kodu</th>
                    <th>Enlem</th>
                    <th>Boylam</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    currendFlights.map((flight) => (
                        <tr key={flight.id}>
                            <td className='text-warning fw-semibold'>{flight.id}</td>
                            <td>{flight.code}</td>
                            <td>{flight.lat}</td>
                            <td>{flight.lng}</td>
                            <td>
                                <button
                                    onClick={() => setDetailId(flight.id)}
                                    className='btn btn-outline-info btn-sm align-middle '>Detail
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <ReactPaginate
                className='pagenation'
                breakLabel="..."
                nextLabel={<MdKeyboardDoubleArrowRight size={24} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={totalPage}
                previousLabel={<MdKeyboardDoubleArrowLeft size={24} />}
                renderOnZeroPageCount={true}
            />
        </div>
    );
};

export default List;

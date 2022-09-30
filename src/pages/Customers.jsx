import { useDispatch, useSelector } from "react-redux";
import { getData, removeData } from "../redux/actions/actions";
import { Table } from "antd";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";



function Customers() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let state = useSelector((state) => state);
  const handleDelete = (e) => {
    console.log('event: ',e);
    dispatch(removeData(e));
    toast.success("Item Deleted!");
    dispatch(getData());
  };
  

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact title",
      dataIndex: "contactTitle",
    },
    {
      title:'Delete Customer',
      dataIndex:'id',
      key:'id',
      render: (text, record) => (
        <>
           <button className="remove" onClick={() => { handleDelete(record) }}>
          {"Delete"}
        </button>
        </>
      ),
    },
  ];
  return (
    <div className="container">
      <Table dataSource={state} columns={columns} rowKey={state=>state.id} />
      <Toaster />
    </div>
  );
}

export default Customers;

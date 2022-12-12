import { useDispatch, useSelector } from "react-redux";
import { getBusinessPlaceById } from "../actions/businessPlace";
import { useForm } from "react-hook-form";
import InputFieldWithLabel from "../common/inputFieldWithLabel";
import Button from "../common/button";
import Table from "../common/Table";
import Style from "./businessPlace.module.css";

export default function BusinessPlace() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const { businessPlace } = useSelector((state) => state.businessPlace);

  const isOpen = businessPlace?.open;

  const getBusinessPlaceData = (data) => {
    dispatch(getBusinessPlaceById(data?.businessPlaceId));
  };

  const columns = () => {
    return [
      { title: "Day", field: "name" },
      {
        title: "Opening hours",
        render: (row) => {
          if (!row.shiftList) {
            return "Closed";
          }
          return row.shiftList.map((shift, index) => {
            return <div key={index}>{shift.start + "-" + shift.end}</div>;
          });
        },
      },
    ];
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(getBusinessPlaceData)}>
          <div>
            <InputFieldWithLabel
              label="Insert restaurant id:"
              name="businessPlaceId"
              required
              registerName="businessPlaceId"
              register={register}
            />
            <Button text="Submit" />
          </div>
        </form>

        {isOpen ? (
          <div className={Style.opened}>Open</div>
        ) : (
          <div className={Style.closed}>Close</div>
        )}
        <Table
          title={
            businessPlace?.name
              ? businessPlace?.name + " - " + businessPlace?.address
              : "Choose a restaurant"
          }
          data={businessPlace?.dayList}
          columns={columns}
        />
      </header>
    </div>
  );
}

import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto space-y-4 "
        >
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.title && (
              <span className="text-sm text-red-500">Title is required</span>
            )}
          </div>

          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.description && (
              <span className="text-sm text-red-500">
                Description is required
              </span>
            )}
          </div>

          <div>
            <label className="block font-semibold">Deadline</label>
            <input
              type="date"
              {...register("deadline", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.deadline && (
              <span className="text-sm text-red-500">Deadline is required</span>
            )}
          </div>

          <div>
            <label className="block font-semibold">Assign To</label>
            <select
              {...register("assignTo", { required: true })}
              className="w-full p-2 border rounded"
            >
              <option value="Low">Sakib</option>
              <option value="Medium">Santo</option>
              <option value="High">Rakib</option>
            </select>
            {errors.priority && (
              <span className="text-sm text-red-500">Priority is required</span>
            )}
          </div>

          <div>
            <label className="block font-semibold">Priority</label>
            <select
              {...register("priority", { required: true })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.priority && (
              <span className="text-sm text-red-500">Priority is required</span>
            )}
          </div>

          <div>
            <button
              className="px-4 py-2 mr-4 text-white bg-red-600 rounded hover:bg-red-700"
              type="button"
              onClick={() => onCancel()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;

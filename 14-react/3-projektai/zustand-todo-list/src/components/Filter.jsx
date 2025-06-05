import { useTodoStore } from '../store/store'; 

const Filter = () => {
    const currentFilter = useTodoStore(state => state.filter);
    const setFilter = useTodoStore(state => state.setFilter);

    return (
        <div className="filters">
            <span 
                className={currentFilter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </span>
            <span 
                className={currentFilter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Completed
            </span>
            <span 
                className={currentFilter === 'incompleted' ? 'active' : ''}
                onClick={() => setFilter('incompleted')}
            >
                Incomplete
            </span>
        </div>
    );
};

export default Filter;

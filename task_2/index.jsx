import { Fragment, memo } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(() => console.log("hi from MainComponent"), []); // function to make a log from MainComponent

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));

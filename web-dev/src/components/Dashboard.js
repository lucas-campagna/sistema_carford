import { useCallback, useState, useEffect, useMemo } from 'react';
import styles from './Dashboard.module.css';
import { generateRandomClient } from '../tests/utils.js';

export default function Dashboard({connectionState}){
    const [clients, setClients] = useState([]);
    // const [clients, setClients] = useState(clientsExample);
    const [selectedIdx, setSelectedIdx] = useState(0);

    const keyPressCallback = useCallback(ev=>{
        if(ev.key === 'ArrowDown' && selectedIdx < clients.length -1){
            ev.preventDefault();
            setSelectedIdx(selectedIdx + 1);
        }
        else if(ev.key === 'ArrowUp' && selectedIdx > 0){
            ev.preventDefault();
            setSelectedIdx(selectedIdx - 1);
        }
    },[selectedIdx]);


    useEffect(()=>{
        if(process.env.NODE_ENV !== 'production'){
            const clientsExample = Array(30).fill(0).map((e,i)=>({id:i,...generateRandomClient()}));
            setClients(clientsExample);
        }else{
            // Get clients from database
        }
    },[]);

    useEffect(() => {
        window.addEventListener("keydown", keyPressCallback, false);
    
        return () => {
            window.removeEventListener("keydown", keyPressCallback, false);
        };
      }, [selectedIdx]);
    return (
        <div className={styles.DashboardRoot}>
            <div className={styles.clientListWrapper}>
                <div>
                    <div className={styles.clientListHeaderWrapper}>
                        <input type='checkbox' title='Order by sale oportuniy' className={styles.clientListSortButton}/>
                        <input type='text' placeholder='User name' title='Filter by user name' className={styles.clientListFilter}/>
                    </div>
                </div>
                <div className={styles.clientListItemsWrapper}>
                    {clients.map(({name,id,cars},i)=>(
                        <div
                            className={`${styles.clientListItem} ${0 <= selectedIdx < clients.length && clients[selectedIdx].id == id ? styles.selected:''}`} key={id}
                            onClick={()=>setSelectedIdx(i)}
                        >
                            <span>{cars.length}</span>
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
                <input type='button' className={styles.clientListButtonAdd} title='Add new user' value='Add'/>
            </div>
            {0 <= selectedIdx < clients.length ?
                <div className={styles.clientDescriptionWrapper}>
                        <span className={styles.clientDescriptionName}>{clients[selectedIdx].name}</span>
                        <span className={styles.clientDescriptionLevel}>
                            <span
                                className={styles.clientDescriptionLevelNeedle}
                                style={{'transform':`rotate(-${[130,103.33,76.666,50][3-clients[selectedIdx].cars.length]}deg)`}}
                            ></span>
                            <span style={{zIndex:0,position:'absolute',top:'20%',left:'5%',fontSize:'1.5vmin',fontWeight:'200',color:'blue'}}>0%</span>
                            <span style={{zIndex:0,position:'absolute',top:'10%',left:'30%',fontSize:'1.6vmin',fontWeight:'400',transform:'translateX(-25%)',color:'orange'}}>33%</span>
                            <span style={{zIndex:0,position:'absolute',top:'10%',right:'28%',fontSize:'1.7vmin',fontWeight:'500',transform:'translateX(25%)',color:'orangered'}}>66%</span>
                            <span style={{zIndex:0,position:'absolute',top:'25%',right:'1%',fontSize:'1.8vmin',fontWeight:'600',color:'red'}}>100%</span>
                            <span
                                className={styles.clientDescriptionLevelNeedlePoint}
                            ></span>
                        </span>
                        {Array(3).fill(0).map((_,i)=>
                        <div
                            className={styles.clientDescriptionCarDescription}
                            style={{bottom:`${45 - 22.5*i}%`}}
                            key={`${clients[selectedIdx].id}-${i}`}
                        >
                            {
                            i < clients[selectedIdx].cars.length ?
                            <CarDescription model={clients[selectedIdx].cars[i].model} color={clients[selectedIdx].cars[i].color}/>
                            :
                            <CarDescription/>
                        }
                        </div>
                        )}
                </div>
                :
                ''}
        </div>
    );
}


function CarDescription({model,color}){
    return <div className={model && color? styles.carDescriptionRoot : styles.carDescriptionRootDisabled}>
        <img
            className={styles.carDescriptionImage}
            src={
                model && color ?
                `imgs/${model}-${color}.png`
                : 
                model ?
                `imgs/${model}-default.png`
                :
                `imgs/default.png`
            }
            alt="car-image"
        />
        <span
            className={styles.carDescriptionModel}>
            {model && color ? model : '-'}
        </span>
        <span
            className={styles.carDescriptionColor}>
            {model && color ? color : '-'}
        </span>
    </div>
}
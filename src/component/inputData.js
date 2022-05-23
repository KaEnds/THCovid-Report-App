

function inputData(datas, labeltext, color, labels){

    const data = {
    labels,
    datasets: [
        {
        type: 'bar',
        label: labeltext,
        data: datas,
        backgroundColor: color,
        },
        // {
        // type: 'line',
        // label: labeltext,
        // data: spreadData(datas , index),
        // backgroundColor: color,
        // }
    ],
    };

    return data
}

export default inputData
export const htmlTemplate = (body) => {
    return `
    <html>
        <head>
            <style type="text/css">
                body{
                    margin: 0;
                    font-size: 16px;
                    line-height: 1.2;
                    padding: 0;
                    color:black;
                }
                a{
                    color:white;
                }
                a:visited{
                    color:white;
                }
                .container{
                    margin: 1rem;
                    padding: 1rem;
                    text-align: left;
                }
                .logo{
                    margin: 1rem 0; 
                    display: flex;
                    flex-direction: row;
                    justify-content:center;
                    align-items:center;
                }
                .logo img{
                    margin: 5px;
                    width: 75px;
                }
                .logo-name{
                    font-size: 3rem;
                    margin: 5px;
                    font-weight:700;
                    color: #609DB0;
                }
                .btn{
                    margin:1rem;
                    background-color: #487D8E;
                    padding: 1rem 1.5rem;
                    text-decoration: none;
                    text-transform: uppercase;
                }
                .btn:hover{
                    background-color: #14566B;
                    cursor: pointer;
                }
                .btn:active{
                    background-color: black;
                }
                .btn:visited{
                    background-color: #ccc;
                }
                .btn-confirm{
                    background-color: #128508;
                }
                .btn-confirm:hover{
                    background-color: #0b5904;
                }
                .btn-reject{
                    background-color: #8a0e0c;
                }
                .btn-reject:hover{
                    background-color: #5c0504;
                }
            </style>
        </head>
        <body class="container">
            <div class="logo">
                <img src="https://imagizer.imageshack.com/img922/9360/uDiOqa.png" alt="Orly-Logo"/>
                <p class="logo-name">ORLY</p>
            </div>
            ${body}
        </body>
    </html>
    `
}
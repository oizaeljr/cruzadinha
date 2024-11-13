



function enviar() {
    // Address Bus
    var A_5_7 = a_5_7.value.toUpperCase().includes('A'); //usado no RAM
    var D_5 = d_5.value.toUpperCase().includes('D');
    var DD_5 = dd_5.value.toUpperCase().includes('D');
    var R_5 = r_5.value.toUpperCase().includes('R');
    var E_1_5 = e_1_5.value.toUpperCase().includes('E'); //usado em memórias de massa 
    var S_5 = s_5.value.toUpperCase().includes('S');
    var SS_5 = ss_5.value.toUpperCase().includes('S');
    var B_5 = b_5.value.toUpperCase().includes('B');
    var U_5_6 = u_5_6.value.toUpperCase().includes('U'); //usado no ULA 
    var SSS_5 = sss_5.value.toUpperCase().includes('S');

    var addVerdade = A_5_7 && D_5 && DD_5 && R_5 && E_1_5 && S_5 && SS_5 && B_5 && U_5_6 && SSS_5;

    if (addVerdade) {
        a_5_7.style.backgroundColor = 'green';
        d_5.style.backgroundColor = 'green';
        dd_5.style.backgroundColor = 'green';
        r_5.style.backgroundColor = 'green';
        e_1_5.style.backgroundColor = 'green';
        s_5.style.backgroundColor = 'green';
        ss_5.style.backgroundColor = 'green';
        b_5.style.backgroundColor = 'green';
        u_5_6.style.backgroundColor = 'green';
        sss_5.style.backgroundColor = 'green';
    }

    //RAM

    var R_7 = r_7.value.toUpperCase().includes('R');
    var M_7_15 = m_7_15.value.toUpperCase().includes('M'); //usado no ROM

    var ramVerdade = R_7 && M_7_15 && A_5_7

    if (ramVerdade) {
        r_7.style.backgroundColor = 'green';
        m_7_15.style.backgroundColor = 'green';
        a_5_7.style.backgroundColor = 'green';
    }


    //ROM

    var R_15 = r_15.value.toUpperCase().includes('R');
    var O_15 = o_15.value.toUpperCase().includes('O');

    var romVerdade = R_15 && O_15 && M_7_15;

    if (romVerdade) {
        r_15.display.backgroundColor = 'green';
        o_15.display.backgroundColor = 'green';
        m_7_15.style.backgroundColor = 'green';
    }

    //ULA
    var L_6 = l_6.value.toUpperCase().includes('L');
    var A_6_8 = a_6_8.value.toUpperCase().includes('A'); // usado no data bus

    var ulaVerdade = U_5_6 && L_6 && A_6_8;

    if (ulaVerdade) {
        l_6.style.backgroundColor = 'green';
        a_6_8.style.backgroundColor = 'green';
        u_5_6.style.backgroundColor = 'green';
    }

    //Data bus

    var D_8 = d_8.value.toUpperCase().includes('D');
    var T_8 = t_8.value.toUpperCase().includes('T');
    var AA_8 = aa_8.value.toUpperCase().includes('A');
    var B_8 = b_8.value.toUpperCase().includes('B');
    var U_8_9 = u_8_9.value.toUpperCase().includes('U'); //usado no CPU
    var S_8 = s_8.value.toUpperCase().includes('S');

    var dataVerdade = D_8 && A_6_8 && T_8 && AA_8 && B_8 && U_8_9 && S_8;

    if (dataVerdade) {
        d_8.style.backgroundColor = 'green';
        a_6_8.style.backgroundColor = 'green';
        t_8.style.backgroundColor = 'green';
        aa_8.style.backgroundColor = 'green';
        b_8.style.backgroundColor = 'green';
        u_8_9.style.backgroundColor = 'green';
        s_8.style.backgroundColor = 'green';
    }

    //CPU
    var C_9 = c_9.value.toUpperCase().includes('C');
    var P_9 = p_9.value.toUpperCase().includes('P');

    var cpuVerdade = C_9 && P_9 && U_8_9;

    if (cpuVerdade) {
        c_9.style.backgroundColor = 'green';
        p_9.style.backgroundColor = 'green';
        u_8_9.style.backgroundColor = 'green';
    }

    //Registradores
    var R_2 = r_2.value.toUpperCase().includes('R');
    var E_1_2 = e_1_2.value.toUpperCase().includes('E'); //usado em memórias de massa
    var G_2 = g_2.value.toUpperCase().includes('G');
    var I_2_16 = i_2_16.value.toUpperCase().includes('I'); //usado no i7
    var S_2 = s_2.value.toUpperCase().includes('S');
    var T_2 = t_2.value.toUpperCase().includes('T');
    var RR_2 = rr_2.value.toUpperCase().includes('R');
    var A_2 = a_2.value.toUpperCase().includes('A');
    var D_2 = d_2.value.toUpperCase().includes('D');
    var O_2 = o_2.value.toUpperCase().includes('O');
    var RRR_2_12 = rrr_2_12.value.toUpperCase().includes('R'); //usado em EPROM
    var EE_2 = ee_2.value.toUpperCase().includes('E');
    var SS_2_10 = ss_2_10.value.toUpperCase().includes('S'); //usado em CS

    var regVerdade = R_2 && E_1_2 && G_2 && I_2_16 && S_2 && T_2 && RR_2 && A_2 && D_2 && O_2 && RRR_2_12 && EE_2 && SS_2_10;

    if (regVerdade) {
        r_2.style.backgroundColor = 'green';
        e_1_2.style.backgroundColor = 'green';
        g_2.style.backgroundColor = 'green';
        i_2_16.style.backgroundColor = 'green';
        s_2.style.backgroundColor = 'green';
        t_2.style.backgroundColor = 'green';
        rr_2.style.backgroundColor = 'green';
        a_2.style.backgroundColor = 'green';
        d_2.style.backgroundColor = 'green';
        o_2.style.backgroundColor = 'green';
        rrr_2_12.style.backgroundColor = 'green';
        ee_2.style.backgroundColor = 'green';
        ss_2_10.style.backgroundColor = 'green';
    }

    //CS

    var C_10 = c_10.value.toUpperCase().includes('C');

    var csVerdade = C_10 && SS_2_10;

    if (csVerdade) {
        c_10.style.backgroundColor = 'green';
        ss_2_10.style.backgroundColor = 'green';
    }

    //EPROM

    var E_12 = e_12.value.toUpperCase().includes('E');
    var P_12 = p_12.value.toUpperCase().includes('P');
    var O_12 = o_12.value.toUpperCase().includes('O');
    var M_12_13 = m_12_13.value.toUpperCase().includes('M'); // usado no DMA

    var eprVerdade = E_12 && P_12 && RRR_2_12 && O_12 && M_12_13;

    if (eprVerdade) {
        e_12.style.backgroundColor = 'green';
        p_12.style.backgroundColor = 'green';
        rrr_2_12.style.backgroundColor = 'green';
        o_12.style.backgroundColor = 'green';
        m_12_13.style.backgroundColor = 'green';
    }

    // DMA

    var D_13 = d_13.value.toUpperCase().includes('D');
    var A_13 = a_13.value.toUpperCase().includes('A');

    var dmaVerdade = D_13 && M_12_13 && A_13;

    if (dmaVerdade) {
        d_13.style.backgroundColor = 'green';
        m_12_13.style.backgroundColor = 'green';
        a_13.style.backgroundColor = 'green';
    }

    //i7

    var NUMERO_7 = numero_7.value.includes('7')
    var i7Verdade = I_2_16 && NUMERO_7;

    if (i7Verdade) {
        i_2_16.style.backgroundColor = 'green';
        numero_7.style.backgroundColor = 'green';
    }

    //Memória de massa

    var M_1 = m_1.value.toUpperCase().includes('M');
    // var E_1_5 = e_1_5.value.toUpperCase().includes('E'); //usado no Addres bus
    var MM_1 = mm_1.value.toUpperCase().includes('M');
    var O_1 = o_1.value.toUpperCase().includes('Ó');
    var R_1 = r_1.value.toUpperCase().includes('R');
    var I_1_4 = i_1_4.value.toUpperCase().includes('I'); //usado no i5
    var A_1_3 = a_1_3.value.toUpperCase().includes('A'); // usado no Flash
    var D_1 = d_1.value.toUpperCase().includes('D');
    var MMM_1 = mmm_1.value.toUpperCase().includes('M');
    var AA_1_11 = aa_1_11.value.toUpperCase().includes('A'); //usado em quad core
    var S_1 = s_1.value.toUpperCase().includes('S');
    var SS_1 = ss_1.value.toUpperCase().includes('S');
    var AAA_1_14 = aaa_1_14.value.toUpperCase().includes('A'); //usado no dual core

    var memVerdade = M_1 && E_1_5 && MM_1 && O_1 && R_1 && I_1_4 && A_1_3 && D_1 && E_1_2 && MMM_1 && AA_1_11 && S_1 && SS_1 && AAA_1_14;

    if (memVerdade) {
        m_1.style.backgroundColor = 'green';
        e_1_5.style.backgroundColor = 'green';
        mm_1.style.backgroundColor = 'green';
        o_1.style.backgroundColor = 'green';
        r_1.style.backgroundColor = 'green';
        i_1_4.style.backgroundColor = 'green';
        a_1_3.style.backgroundColor = 'green';
        d_1.style.backgroundColor = 'green';
        e_1_2.style.backgroundColor = 'green';
        mmm_1.style.backgroundColor = 'green';
        aa_1_11.style.backgroundColor = 'green';
        s_1.style.backgroundColor = 'green';
        ss_1.style.backgroundColor = 'green';
        aaa_1_14.style.backgroundColor = 'green';
    }

    //i5

    var NUMERO_5 = numero_5.value.includes('5')
    var i5Verdade = I_1_4 && NUMERO_5;

    if (i5Verdade) {
        i_1_4.style.backgroundColor = 'green';
        numero_5.style.backgroundColor = 'green';
    }

    //FLASH

    var F_3 = f_3.value.toUpperCase().includes('F');
    var L_3 = l_3.value.toUpperCase().includes('L');
    var S_3 = s_3.value.toUpperCase().includes('S');
    var H_3 = h_3.value.toUpperCase().includes('H');

    var flsVerdade = F_3 && L_3 && A_1_3 && S_3 && H_3;

    if (flsVerdade) {
        f_3.style.backgroundColor = 'green';
        a_1_3.style.backgroundColor = 'green';
        l_3.style.backgroundColor = 'green';
        s_3.style.backgroundColor = 'green';
        h_3.style.backgroundColor = 'green';
    }

    //QUAD CORE

    var Q_11 = q_11.value.toUpperCase().includes('Q');
    var U_11 = u_11.value.toUpperCase().includes('U');
    var D_11 = d_11.value.toUpperCase().includes('D');
    var C_11 = c_11.value.toUpperCase().includes('C');
    var O_11 = o_11.value.toUpperCase().includes('O');
    var R_11 = r_11.value.toUpperCase().includes('R');
    var E_11 = e_11.value.toUpperCase().includes('E');

    var quadVerdade = Q_11 && U_11 && AA_1_11 && D_11 && C_11 && O_11 && R_11 && E_11;

    if (quadVerdade) {
        q_11.style.backgroundColor = 'green';
        u_11.style.backgroundColor = 'green';
        aa_1_11.style.backgroundColor = 'green';
        d_11.style.backgroundColor = 'green';
        c_11.style.backgroundColor = 'green';
        o_11.style.backgroundColor = 'green';
        r_11.style.backgroundColor = 'green';
        e_11.style.backgroundColor = 'green';
    }


    //DUAL CORE

    var D_14 = d_14.value.toUpperCase().includes('D');
    var U_14 = u_14.value.toUpperCase().includes('U');
    var L_14 = l_14.value.toUpperCase().includes('L');
    var C_14 = c_14.value.toUpperCase().includes('C');
    var O_14 = o_14.value.toUpperCase().includes('O');
    var R_14 = r_14.value.toUpperCase().includes('R');
    var E_14 = e_14.value.toUpperCase().includes('E');

    var dualVerdade = D_14 && U_14 && AAA_1_14 && L_14 && C_14 && O_14 && R_14 && E_14;

    if (dualVerdade) {
        d_14.style.backgroundColor = 'green';
        u_14.style.backgroundColor = 'green';
        aaa_1_14.style.backgroundColor = 'green';
        l_14.style.backgroundColor = 'green';
        c_14.style.backgroundColor = 'green';
        o_14.style.backgroundColor = 'green';
        r_14.style.backgroundColor = 'green';
        e_14.style.backgroundColor = 'green';
    }


}

function limpar() {

    //ROM

    r_15.value = '';
    r_15.style.backgroundColor = 'white';
    o_15.value = '';
    o_15.style.backgroundColor = 'white';

    //ULA
    l_6.value = '';
    l_6.style.backgroundColor = 'white';
    a_6_8.value = '';
    a_6_8.style.backgroundColor = 'white';

     //Data bus

    d_8.value = '';
    d_8.style.backgroundColor = 'white';
    t_8.value = '';
    t_8.style.backgroundColor = 'white';
    aa_8.value = '';
    aa_8.style.backgroundColor = 'white';
    b_8.value = '';
    b_8.style.backgroundColor = 'white';
    u_8_9.value = '';
    u_8_9.style.backgroundColor = 'white'; //usado no CPU
    s_8.value = '';
    s_8.style.backgroundColor = 'white';

    //CPU
    c_9.value = '';
    c_9.style.backgroundColor = 'white';
    p_9.value = '';
    p_9.style.backgroundColor = 'white';

    //Registradores
    r_2.value = '';
    r_2.style.backgroundColor = 'white';
    e_1_2.value = '';
    e_1_2.style.backgroundColor = 'white'; //usado em memórias de massa
    g_2.value = '';
    g_2.style.backgroundColor = 'white';
    i_2_16.value = '';
    i_2_16.style.backgroundColor = 'white'; //usado no i7
    s_2.value = '';
    s_2.style.backgroundColor = 'white';
    t_2.value = '';
    t_2.style.backgroundColor = 'white';
    rr_2.value = '';
    rr_2.style.backgroundColor = 'white';
    a_2.value = '';
    a_2.style.backgroundColor = 'white';
    d_2.value = '';
    d_2.style.backgroundColor = 'white';
    o_2.value = '';
    o_2.style.backgroundColor = 'white';
    rrr_2_12.value = '';
    rrr_2_12.style.backgroundColor = 'white'; //usado em EPROM
    ee_2.value = '';
    ee_2.style.backgroundColor = 'white';
    ss_2_10.value = '';
    ss_2_10.style.backgroundColor = 'white';

    //CS

    c_10.value = '';
    c_10.style.backgroundColor = 'white';

    //EPROM

    e_12.value = '';
    e_12.style.backgroundColor = 'white';
    p_12.value = '';
    p_12.style.backgroundColor = 'white';
    o_12.value = '';
    o_12.style.backgroundColor = 'white';
    m_12_13.value = '';
    m_12_13.style.backgroundColor = 'white';

    // DMA

    d_13.value = '';
    d_13.style.backgroundColor = 'white';
    a_13.value = '';
    a_13.style.backgroundColor = 'white';

    //i7

    numero_7.value = ''
    numero_7.style.backgroundColor = 'white';

    //Memória de massa

    m_1.value = '';
    m_1.style.backgroundColor = 'white';
    mm_1.value = '';
    mm_1.style.backgroundColor = 'white';
    o_1.value = '';
    o_1.style.backgroundColor = 'white';
    r_1.value = '';
    r_1.style.backgroundColor = 'white';
    i_1_4.value = '';
    i_1_4.style.backgroundColor = 'white'; //usado no i5
    a_1_3.value = '';
    a_1_3.style.backgroundColor = 'white'; // usado no Flash
    d_1.value = '';
    d_1.style.backgroundColor = 'white';
    mmm_1.value = '';
    mmm_1.style.backgroundColor = 'white';
    aa_1_11.value = '';
    aa_1_11.style.backgroundColor = 'white'; //usado em quad core
    s_1.value = '';
    s_1.style.backgroundColor = 'white';
    ss_1.value = '';
    ss_1.style.backgroundColor = 'white';
    aaa_1_14.value = '';
    aaa_1_14.style.backgroundColor = 'white'; 

    //i5

    numero_5.value = ''
    numero_5.style.backgroundColor = 'white';

    //FLASH

    f_3.value = '';
    f_3.style.backgroundColor = 'white';
    l_3.value = '';
    l_3.style.backgroundColor = 'white';
    s_3.value = '';
    s_3.style.backgroundColor = 'white';
    h_3.value = '';
    h_3.style.backgroundColor = 'white';

    //QUAD CORE

    q_11.value = '';
    q_11.style.backgroundColor = 'white';
    u_11.value = '';
    u_11.style.backgroundColor = 'white';
    d_11.value = '';
    d_11.style.backgroundColor = 'white';
    c_11.value = '';
    c_11.style.backgroundColor = 'white';
    o_11.value = '';
    o_11.style.backgroundColor = 'white';
    r_11.value = '';
    r_11.style.backgroundColor = 'white';
    e_11.value = '';
    e_11.style.backgroundColor = 'white';

    //DUAL CORE

    d_14.value = '';
    d_14.style.backgroundColor = 'white';
    u_14.value = '';
    u_14.style.backgroundColor = 'white';
    l_14.value = '';
    l_14.style.backgroundColor = 'white';
    c_14.value = '';
    c_14.style.backgroundColor = 'white';
    o_14.value = '';
    o_14.style.backgroundColor = 'white';
    r_14.value = '';
    r_14.style.backgroundColor = 'white';
    e_14.value = '';
    e_14.style.backgroundColor = 'white';

    // Address Bus
    a_5_7.value = '';
    a_5_7.style.backgroundColor = 'white'; //usado no RAM
    d_5.value = '';
    d_5.style.backgroundColor = 'white';
    dd_5.value = '';
    dd_5.style.backgroundColor = 'white';
    r_5.value = '';
    r_5.style.backgroundColor = 'white';
    e_1_5.value = '';
    e_1_5.style.backgroundColor = 'white'; //usado em memórias de massa 
    s_5.value = '';
    s_5.style.backgroundColor = 'white';
    ss_5.value = '';
    ss_5.style.backgroundColor = 'white';
    b_5.value = '';
    b_5.style.backgroundColor = 'white';
    u_5_6.value = '';
    u_5_6.style.backgroundColor = 'white'; //usado no ULA 
    sss_5.value = '';
    sss_5.style.backgroundColor = 'white';

    //RAM

    r_7.value = '';
    r_7.style.backgroundColor = 'white';
    m_7_15.value = '';
    m_7_15.style.backgroundColor = 'white';
}

function exibirPergunta() {
    var optPerguntas = sel_perguntas.value

    if (optPerguntas == 9) {
        div_pergunta.innerHTML = `9 - Utilizado para localizar um componente e o endereço/localização exata dentro dele. Deste modo há comunicação e envio de dados entre o processador e o componente.`
    } else if (optPerguntas == 6) {
        div_pergunta.innerHTML = `6 - Responsável por executar operações de cálculos matemáticos e lógicos`
    } else if (optPerguntas == 2) {
        div_pergunta.innerHTML = `2 - Memórias auxiliares localizados dentro da CPU. São rápidas e destinadas para o armazenamento de dados e instruções temporárias. São três as principais: Acumulador, contador de programa e ponteiro da pilha.`
    } else if (optPerguntas == 7) {
        div_pergunta.innerHTML = `7 - Memória utilizadas para aplicações em que há necessidade de atualizações frequentes devido a sua característica de apagar dados em blocos. Ela é do tipo que, mesmo sem energia, manterá as informações que foram salvas.`
    } else if (optPerguntas == 15) {
        div_pergunta.innerHTML = `15 - Tipo de memória não volátil, que armazena dados essenciais para o funcionamento do sistema, como a BIOS. Esse tipo de memória permite apenas a leitura dos dados, ou seja, não é possível alterá-las.`
    } else if (optPerguntas == 12) {
        div_pergunta.innerHTML = `12 - Tipo de memória não volátil, responsável por armazer dados semi-permantentes, tais como: aplicativos de computador, linguagens de programação, entre outros. Esse tipo de memória permite, além da leitura, a regravação do conteúdo contido nela.`
    } else if (optPerguntas == 3) {
        div_pergunta.innerHTML = `3 - Tipo de memória não volátil, que mantém dados sem a necessidade de uma fonte de energia. Ela permite que os dados sejam apagados em blocos inteiros, tornando-a mais rápida e desejável para aplicações que necessitam de atualizações frequentes. É comum encontrá-la em cartões de memória, pen drives USB, celulares, entre outros.`
    } else if (optPerguntas == 1) {
        div_pergunta.innerHTML = `1 - Conhecida como memória secundária, ela é responsável por armazenar grandes quantidades de dados. Vale ressaltar que ela mantém esses dados salvos mesmo com o desligamento do computador e por um longo período de tempo. Ela é representada por: discos rígidos, dispositivos de armazenamento ótico, entre outros.`
    } else if (optPerguntas == 9) {
        div_pergunta.innerHTML = `9 - Tipo de memória que permite apenas a leitura de dados, ou seja, as 
            informações são gravadas pelo fabricante e não podem ser alteradas ou 
            apagadas. A sua função é armazenar firmwares ou pequenos softwares que 
            atuam somente em um hardware específico.`
    } else if (optPerguntas == 10) {
        div_pergunta.innerHTML = `10 - Processador intermediário, arquitetura híbrida de alto desempenho 
             combina duas microarquiteturas de núcleos, os Performance-cores (P-cores) 
            e os Efficient-cores (E-cores), em uma mesma matriz do processador lançado 
            em 2009.`
    } else if (optPerguntas == 11) {
        div_pergunta.innerHTML = `11 - Ligação de dados que conecta todos os participantes entre si 
            através de um caminho de transmissão`
    } else if (optPerguntas == 12) {
        div_pergunta.innerHTML = `12 - Um recurso que permite que dispositivos de hardware, como 
            placas de rede, de som ou gráficas, acessem a memória do sistema 
            sem depender da CPU`
    } else if (optPerguntas == 13) {
        div_pergunta.innerHTML = `13 - Termo que se refere a um processador com quatro núcleos de processamento.
            Ex: processador i7 da linha Sandy Bridge, da Intel`
    } else if (optPerguntas == 14) {
        div_pergunta.innerHTML = `14 - Componente responsável por realizar as principais operações e 
            cálculos necessários para que o computador funcione corretamente`
    } else if (optPerguntas == 15) {
        div_pergunta.innerHTML = `15 - Estratégia de negócio que visa garantir que os clientes fiquem 
            satisfeitos com a empresa e continuem a comprar seus produtos ou serviços`
    } else if (optPerguntas == 16) {
        div_pergunta.innerHTML = `16 - Processador da Intel, de alto desempenho lançado em 2008 
            e é voltado para usuários avançados e profissionais.`
    } else {
        div_pergunta.innerHTML = ``
    }
}
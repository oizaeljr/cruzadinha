



function enviar() {
    // Address Bus
    var A_5_7 = a_5_7.value.includes('A','a'); //usado no RAM
    var D_5 = d_5.value.includes('D','d'); 
    var DD_5 = dd_5.value.includes('D','d'); 
    var R_5 = r_5.value.includes('R','r');
    var E_1_5 = e_1_5.value.includes('E','e'); //usado em memórias de massa 
    var S_5 = s_5.value.includes('S','s');
    var SS_5 = ss_5.value.includes('S','s');
    var B_5 = b_5.value.includes('B','b');
    var U_5_6 = u_5_6.value.includes('U','u'); //usado no ULA 
    var SSS_5 = sss_5.value.includes('S','s');

    var addVerdade = A_5_7 && D_5 && DD_5 && R_5 && E_1_5 && S_5 && SS_5 && B_5 && U_5_6 && SSS_5;

    if(addVerdade){
        a_5_7.style.backgroundColor = green;
        d_5.style.backgroundColor = green;
        dd_5.style.backgroundColor = green;
        r_5.style.backgroundColor = green;
        e_1_5.style.backgroundColor = green;
        s_5.style.backgroundColor = green;
        ss_5.style.backgroundColor = green;
        b_5.style.backgroundColor = green;
        u_5_6.style.backgroundColor = green;
        sss_5.style.backgroundColor = green;
    }
    
    //RAM
    
    var R_7 = r_7.value.includes('R','r');
    var M_7_15 = m_7_15.value.includes('M','m'); //usado no ROM

    var ramVerdade = R_7 && M_7_15 && A_5_7

    if(ramVerdade){
        r_7.style.backgroundColor = green;
        m_7_15.style.backgroundColor = green;
        a_5_7.style.backgroundColor = green;
    }
    
    
    //ROM
    
    var R_15 = r_15.value.includes('R','r');
    var O_15 = o_15.value.includes('O','o');

    var romVerdade = R_15 && O_15 && M_7_15;

    if(romVerdade){
        r_15.display.backgroundColor = green;
        o_15.display.backgroundColor = green;
        m_7_15.style.backgroundColor = green;
    }
    
    //ULA
    var L_6 = l_6.value.includes('L','l');
    var A_6_8 = a_6_8.value.includes('A','a'); // usado no data bus

    var ulaVerdade = U_5_6 && L_6 && A_6_8;

    if(ulaVerdade){
        l_6.style.backgroundColor = green;
        a_6_8.style.backgroundColor = green;
        u_5_6.style.backgroundColor = green;
    }

    //Data bus
    
    var D_8 = d_8.value.includes('D','d');
    var T_8 = t_8.value.includes('T','t');
    var AA_8 = aa_8.value.includes('A','a');
    var B_8 = b_8.value.includes('B','b');
    var U_8_9 = u_8_9.value.includes('U','u'); //usado no CPU
    var S_8 = s_8.value.includes('S','s');

    var dataVerdade = D_8 && A_6_8 && T_8 && AA_8 && B_8 && U_8_9 && S_8;

    if(dataVerdade){
        d_8.style.backgroundColor = green;
        a_6_8.style.backgroundColor = green;
        t_8.style.backgroundColor = green;
        aa_8.style.backgroundColor = green;
        b_8.style.backgroundColor = green;
        u_8_9.style.backgroundColor = green;
        s_8.style.backgroundColor = green;
    }

    //CPU
    var C_9 = c_9.value.includes('C','c');
    var P_9 = p_9.value.includes('P','p');

    var cpuVerdade = C_9 && P_9 && U_8_9;

    if(cpuVerdade){
        c_9.style.backgroundColor = green;
        p_9.style.backgroundColor = green;
        u_8_9.style.backgroundColor = green;
    }

    //Registradores
    var R_2 = r_2.value.includes('R','r');
    var E_1_2 = e_1_2.value.includes('E','e'); //usado em memórias de massa
    var G_2 = g_2.value.includes('G','g'); 
    var I_2_16 = i_2_16.value.includes('I','i'); //usado no i7
    var S_2 = s_2.value.includes('S','s');
    var T_2 = t_2.value.includes('T','t');
    var RR_2 = rr_2.value.includes('R','r');
    var A_2 = a_2.value.includes('A','a');
    var D_2 = d_2.value.includes('D','d');
    var O_2 = o_2.value.includes('O','o');
    var RRR_2_12 = rrr_2_12.value.includes('R','r'); //usado em EPROM
    var EE_2 = ee_2.value.includes('E','e'); 
    var SS_2_10 = ss_2_10.value.includes('S','s'); //usado em CS

    var regVerdade =  R_2 && E_1_2 && G_2 && I_2_16 && S_2 && T_2 && RR_2 && A_2 && D_2 &&  O_2 && RRR_2_12 && EE_2 && SS_2_10;

    if(regVerdade){
        r_2.style.backgroundColor = green;
        e_1_2.style.backgroundColor = green;
        g_2.style.backgroundColor = green;
        i_2_16.style.backgroundColor = green;
        s_2.style.backgroundColor = green;
        t_2.style.backgroundColor = green;
        rr_2.style.backgroundColor = green;
        a_2.style.backgroundColor = green;
        d_2.style.backgroundColor = green;
        o_2.style.backgroundColor = green;
        rrr_2_12.style.backgroundColor = green;
        ee_2.style.backgroundColor = green;
        ss_2_10.style.backgroundColor = green;
    }

    //CS

    var C_10 = c_10.value.includes('C','c');

    var csVerdade = C_10 && SS_2_10;

    if(csVerdade){
        c_10.style.backgroundColor = green;
        ss_2_10.style.backgroundColor = green;
    }

    //EPROM

    var E_12 = e_12.value.includes('E','e');
    var P_12 = p_12.value.includes('P','p');
    var O_12 = o_12.value.includes('O','o');
    var M_12_13 = m_12_13.value.includes('M','m'); // usado no DMA

    var eprVerdade = E_12 && P_12 && RRR_2_12 && O_12 && M_12_13;

    if(eprVerdade){
        e_12.style.backgroundColor = green;
        p_12.style.backgroundColor = green;
        rrr_2_12.style.backgroundColor = green;
        o_12.style.backgroundColor = green;
        m_12_13.style.backgroundColor = green;
    }

    // DMA

    var D_13 = d_13.value.includes('D','d');
    var A_13 = a_13.value.includes('A','a');

    var dmaVerdade = D_13 && M_12_13 && A_13;

    if(dmaVerdade){
        d_13.style.backgroundColor = green;
        m_12_13.style.backgroundColor = green;
        a_13.style.backgroundColor = green;
    }

    //i7

    var NUMERO_7 = numero_7.value.includes('7');

    var i7Verdade = I_2_16 && NUMERO_7;

    if(i7Verdade){
        i_2_16.style.backgroundColor = green;
        numero_7.style.backgroundColor = green;
    }

    //Memória de massa

    var M_1 = m_1.value.includes('M','m');
    // var E_1_5 = e_1_5.value.includes('E','e'); //usado no Addres bus
    var MM_1 = mm_1.value.includes('M','m');
    var O_1 = o_1.value.includes('Ó','ó');
    var R_1 = r_1.value.includes('R','r');
    var I_1_4 = i_1_4.value.includes('I','i'); //usado no i5
    var A_1_3 = a_1_3.value.includes('A','a'); // usado no Flash
    var D_1 = d_1.value.includes('D','d');
    var MMM_1 = mmm_1.value.includes('M','m');
    var AA_1_11 = aa_1_11.value.includes('A','a'); //usado em quad core
    var S_1 = s_1.value.includes('S','s');
    var SS_1 = ss_1.value.includes('S','s');
    var AAA_1_14 = aaa_1_14.value.includes('A','a'); //usado no dual core

    var memVerdade = M_1 && E_1_5 && MM_1 && O_1 && R_1 && I_1_4 && A_1_3 && D_1 && E_1_2 && MMM_1 && AA_1_11 && S_1 && SS_1 && AAA_1_14;

    if(memVerdade){
        m_1.style.backgroundColor = green;
        e_1_5.style.backgroundColor = green;
        mm_1.style.backgroundColor = green;
        o_1.style.backgroundColor = green;
        r_1.style.backgroundColor = green;
        i_1_4.style.backgroundColor = green;
        a_1_3.style.backgroundColor = green;
        d_1.style.backgroundColor = green;
        e_1_2.style.backgroundColor = green;
        mmm_1.style.backgroundColor = green;
        aa_1_11.style.backgroundColor = green;
        s_1.style.backgroundColor = green;
        ss_1.style.backgroundColor = green;
        aaa_1_14.style.backgroundColor = green;
    }

    //i5

    var NUMERO_5 = numero_5.value.includes('5');

    var i5Verdade = I_1_4 && NUMERO_5;

    if(i5Verdade){
        i_1_4.style.backgroundColor = green;
        numero_5.style.backgroundColor = green;
    }

    //FLASH

    var F_3 = f_3.value.includes('F','f');
    var L_3 = l_3.value.includes('L','l');
    var S_3 = s_3.value.includes('S','s');
    var H_3 = h_3.value.includes('H','h');
    
    var flsVerdade = F_3 && L_3 && A_1_3 && S_3 && H_3;

    if(flsVerdade){
        f_3.style.backgroundColor = green;
        a_1_3.style.backgroundColor = green;
        l_3.style.backgroundColor = green;
        s_3.style.backgroundColor = green;
        h_3.style.backgroundColor = green;
    }

    //QUAD CORE

    var Q_11 = q_11.value.includes('Q','q');
    var U_11 = u_11.value.includes('U','u'); 
    var D_11 = d_11.value.includes('D','d');
    var C_11 = c_11.value.includes('C','c');
    var O_11 = o_11.value.includes('O','o');
    var R_11 = r_11.value.includes('R','r');
    var E_11 = e_11.value.includes('E','e');

    var quadVerdade = Q_11 && U_11 && AA_1_11 && D_11 && C_11 && O_11 && R_11 && E_11;

    if(quadVerdade){
        q_11.style.backgroundColor = green;
        u_11.style.backgroundColor = green;
        aa_1_11.style.backgroundColor = green;
        d_11.style.backgroundColor = green;
        c_11.style.backgroundColor = green;
        o_11.style.backgroundColor = green;
        r_11.style.backgroundColor = green;
        e_11.style.backgroundColor = green;
    }


    //DUAL CORE

    var D_14 = d_14.value.includes('D','d');
    var U_14 = u_14.value.includes('U','u');
    var L_14 = l_14.value.includes('L','l');
    var C_14 = c_14.value.includes('C','c');
    var O_14 = o_14.value.includes('O','o');
    var R_14 = r_14.value.includes('R','r');
    var E_14 = e_14.value.includes('E','e');

    var dualVerdade = D_14 && U_14 && AAA_1_14 && L_14 && C_14 && O_14 && R_14 && E_14;

    if(dualVerdade){
        d_14.style.backgroundColor = green;
        u_14.style.backgroundColor = green;
        aaa_1_14.style.backgroundColor = green;
        l_14.style.backgroundColor = green;
        c_14.style.backgroundColor = green;
        o_14.style.backgroundColor = green;
        r_14.style.backgroundColor = green;
        e_14.style.backgroundColor = green;
    }   


}
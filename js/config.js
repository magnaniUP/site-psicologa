/**
 * CONFIGURAÇÃO GLOBAL DO SITE
 * Dra. Mariana Lopes — Psicóloga Clínica
 *
 * ATENÇÃO: Preencha as informações reais antes da publicação oficial.
 */

const SITE_CONFIG = {
  /**
   * TELEFONE WHATSAPP PARA CONTATO:
   * Insira o número oficial no formato internacional sem caracteres especiais:
   * 55 + DDD (2 dígitos) + Número (8 ou 9 dígitos)
   * Exemplo real: "5511999999999"
   *
   * IMPORTANTE: Deixe vazio ("") ou preencha com o número real fornecido pela Dra. Mariana Lopes.
   * Não utilize números fictícios.
   */
  whatsappNumber: "", // <-- INSERIR NÚMERO REAL AQUI (ex: "5511999999999")

  /**
   * Mensagem inicial pré-preenchida no WhatsApp (opcional, codificada para URL)
   */
  whatsappDefaultMessage: "Olá, Dra. Mariana Lopes! Gostaria de obter informações sobre consultas e atendimentos psicológicos.",

  /**
   * INFORMAÇÕES PROFISSIONAIS — ETAPA 04 (SEÇÃO SOBRE MIM)
   * ATENÇÃO: Dados provisórios extraídos do mockup visual de referência.
   * Devem ser validados e confirmados oficialmente pela profissional antes da publicação.
   */
  professional: {
    name: "Dra. Mariana Lopes",
    title: "Psicóloga Clínica",
    crp: "CRP 06/123456", // <-- ATENÇÃO: Validar CRP real com a profissional antes de publicar
    isCrpProvisional: true,
    modalities: "Atendimento presencial e online",
    hoursDays: "Segunda a Sexta", // <-- Confirmar dias de atendimento com a profissional
    hoursTime: "08h às 20h"        // <-- Confirmar horários de atendimento com a profissional
  },

  /**
   * CONTEÚDO EDITORIAL — ETAPA 05 (REFLEXÕES SOBRE SAÚDE EMOCIONAL)
   * Link para a página de artigos/blog quando for criada
   */
  editorial: {
    allContentsUrl: "#reflexoes" // <-- Configurar para URL definitiva de artigos/blog quando existir
  },

  /**
   * SEÇÃO DE DEPOIMENTOS — ETAPA 06
   *
   * AVISO ÉTICO CFP (Resolução CFP nº 010/2005, Art. 20):
   * O Código de Ética Profissional do Psicólogo no Brasil veda o uso de depoimentos
   * de pacientes para promoção comercial de serviços ou garantia de resultados.
   * Os conteúdos atuais são ESTRITAMENTE de demonstração visual do mockup para desenvolvimento.
   */
  testimonials: {
    isProvisionalDemonstration: true,
    title: "Um espaço de escuta e acolhimento", // Conforme mockup visual (ou "O que dizem sobre o processo")
    showDotsNavigation: true
  },

  /**
   * Retorna a URL completa para o WhatsApp de acordo com as diretrizes oficiais
   */
  getWhatsAppUrl() {
    const messageParam = encodeURIComponent(this.whatsappDefaultMessage);
    if (!this.whatsappNumber || this.whatsappNumber.trim() === "") {
      // Enquanto não for configurado, direciona para o protocolo base wa.me ou link informativo
      return `https://wa.me/?text=${messageParam}`;
    }
    const cleanNumber = this.whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${messageParam}`;
  }
};

// Exporta globalmente para uso pelos componentes da página
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}


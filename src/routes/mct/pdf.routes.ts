import { Router } from 'express';
import OrcamentoPDFServices from '../../services/mct/pdf/orcamento.pdf.services'
import JwtChecker from '../../middleware/JwtChecker'

const pdfRoutes = Router();

pdfRoutes.post('/orcamento/simplificado', JwtChecker.verifyJwt, OrcamentoPDFServices.generatePDFOrcamento)
pdfRoutes.post('/orcamento/simplificado/download', JwtChecker.verifyJwt, OrcamentoPDFServices.generatePDFOrcamento)

export default pdfRoutes
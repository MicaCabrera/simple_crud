import {
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  SearchIcon,
} from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { ProjectsContext } from '../context/projectsContext'
import { ModalDelete } from './ModalDelete'

export const CardUser = () => {
  const { projects, editForm, setCurrentProject } = useContext(ProjectsContext)
  const [filterByName, setFilterByName] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(filterByName.toLowerCase())
  )

  const handleDeleteClick = (project) => {
    setSelectedProject(project)
    setCurrentProject(project)
    onOpen()
  }

  const handleConfirmDelete = () => {
    onClose()
  }

  return (
    <Box overflowY="auto" maxH="calc(100vh - 200px)">
      <Container maxW="md" padding="20px">
        <Box>
          <InputGroup>
            <Input
              bg="white"
              type="text"
              placeholder="Nombre del proyecto"
              value={filterByName}
              onChange={(e) => setFilterByName(e.target.value)}
            />
            <InputRightAddon>
              <SearchIcon w={4} />
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box mt={4}>
          {filteredProjects.length > 0 ? (
            <Flex flexDirection="column" gap={4}>
              {filteredProjects.map((p) => (
                <Card key={p.id} p={4} boxShadow="base">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                      <Heading size="md">{p.name}</Heading>
                      <Text fontSize="sm">Fecha de creación: {p.date}</Text>
                      <Flex alignItems="center" mt={2}>
                        <Avatar
                          name="Persona"
                          src="https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611777.jpg"
                          mr={2}
                        />
                        <Text>{p.p_manager}</Text>
                      </Flex>
                    </Box>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<DragHandleIcon />}
                        variant="outline"
                      />
                      <MenuList>
                        <MenuItem
                          as={Link}
                          to="/Formulario-Proyecto"
                          icon={<EditIcon />}
                          onClick={() => editForm(p)}
                        >
                          Editar
                        </MenuItem>
                        <MenuItem
                          icon={<DeleteIcon />}
                          onClick={() => handleDeleteClick(p)}
                        >
                          Eliminar
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Card>
              ))}
            </Flex>
          ) : (
            <Text textAlign={'center'} mt={4}>
              No hay proyectos que mostrar
            </Text>
          )}
        </Box>
      </Container>
      <ModalDelete
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleConfirmDelete}
        project={selectedProject}
      />
    </Box>
  )
}

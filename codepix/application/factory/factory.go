package factory

import (
	"github.com/caiquebb/imersao-fullstack-fullcycle/codepix/application/usecase"
	"github.com/caiquebb/imersao-fullstack-fullcycle/codepix/infrastructure/db/repository"
	"github.com/jinzhu/gorm"
)

func TransactionUseCaseFactory(database *gorm.DB) usecase.TransactionUseCase {
	pixRepository := repository.PixKeyRepositoryDb{Db: database}
	transactionRepository := repository.TransactionRepositoryDb{Db: database}

	trasactionUseCase := usecase.TransactionUseCase{
		TransactionRepository: &transactionRepository,
		PixRepository:         pixRepository,
	}

	return trasactionUseCase
}
